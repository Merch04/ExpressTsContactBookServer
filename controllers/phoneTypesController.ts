import { Request, Response, NextFunction } from "express";
import { prisma } from "../utils/prisma";
import { PhoneTypeData } from "../utils/types";
import { AppError } from "../error/AppError";


export const getPhoneTypes = async(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  try{
    const types = await prisma.phoneType.findMany({})

    return res.status(200).json(types)
  }catch(error){
    next(error);
  }
}

export const addPhoneTypes = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) =>{
    try{
      const {type} = req.body as PhoneTypeData
      console.log(type)
      const types = await prisma.phoneType.findFirst({
        where:{
            type: type
        }
      })
      if(types){
        throw new AppError(400, `type with name ${type} already exists`);
      }
      
      await prisma.phoneType.create({
        data:{
            type: type
        }
      })
      return res.status(200).json({})
    }catch(error){
      next(error);
    }
  }


export const deletePhoneTypes = async(
  req: Request,
  res: Response,
  next: NextFunction
) =>{
  if(req.user.role !='ADMIN'){
    return res.status(403).json({})
  }
  try{
    const {type} = req.body as PhoneTypeData
    const types = await prisma.phoneType.delete({
      where:{
          type: type
      }
    })
    return res.status(200).json({})
  }catch(error){
    next(error);
  }
}
    