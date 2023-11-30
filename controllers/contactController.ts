import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/prisma";
import { ContactData, ContactnumberData } from "../utils/types";


export const createNewContact = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstname, lastname, fathername, description } = req.body as ContactData;
    const createdContact = await prisma.contact.create({
        data: {
            ownerId: req.user.id,
            firstname: firstname,
            lastname: lastname,
            fathername: fathername,
            description: description
        }
    })
    return res.status(200).json({ contactId : createdContact.id });

  } catch (error) {
    next(error);
  }
};

export const deleteContact = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.body as ContactData;
    
    await prisma.contact.delete({
      where:{
        id : id,
      }
    })
    return res.status(200).json();
  } catch (error) {
    next(error);
  }
};


export const getContacts = async(
  req: Request,
  res: Response,
  next: NextFunction
)=>{
 try{
  if(req.user.role == "ADMIN"){
    const contacts = await prisma.contact.findMany({
      where:{
        ownerId: Number(req.query.userId)
      },
      select:{
        id: true,
        firstname: true,
        lastname:true,
        fathername:true,
      },
      orderBy:[
        {
          lastname: 'asc'
        },
        {
          firstname: 'asc'
        },
        {
          fathername: 'asc'
        }
      ]
    })
    return res.status(200).json(contacts)
  }else{
    const contacts = await prisma.contact.findMany({
      where:{
        ownerId: req.user.id,
      },
      select:{
        id: true,
        firstname: true,
        lastname:true,
        fathername:true,
        description:true,
        numbers:true
      },
      orderBy:[
        {
          lastname: 'asc'
        },
        {
          firstname: 'asc'
        },
        {
          fathername: 'asc'
        }
      ]
    })
    return res.status(200).json(contacts)
  }
    
 }catch(error){
  next(error)
 }
}

export const updateContact = async(
  req: Request,
  res: Response,
  next: NextFunction
)=>{
  try{
    const { id, firstname, lastname, fathername, description } = req.body as ContactData; 
    const updatedContact = await prisma.contact.update({
      where:{
        ownerId: req.user.id,
        id: id
      },
      data:{
        firstname : firstname,
        lastname : lastname,
        fathername : fathername,
        description : description 
      }
    })
    return res.status(200).json({ contactId : updatedContact.id });
  }catch(e){
    next(e)
  }
}

export const addPhoneToContact = async(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  try{
    const { contactId, type, number} = req.body as ContactnumberData
    
    const createdNumber = await prisma.contactNumbers.create({
      data:{
        contactId : contactId,
        number : number,
        type: type
      }
    })

    return res.status(200).json({})

  }catch(error) {
    next(error);  
  }
}

export const deletePhonesToContact = async(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  try{
    const {contactId} = req.body as ContactnumberData

    await prisma.contactNumbers.deleteMany({
      where:{
        contactId : contactId,
      }
    })

    return res.status(200).json({})
  }catch(error) {
    next(error);
  }
}

export const getContact = async(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  try{
     
    const phones = await prisma.contact.findFirst({
      where:{
        id : Number(req.query.contactId),
      },
      select:{
        id: true,
        firstname: true,
        lastname:true,
        fathername:true,
        description:true,
        numbers: true
      }
      
    })

    return res.status(200).json(phones)
  }catch(error) {
    next(error);
  }
}

