declare global {
  namespace Express {
    interface Request {
      user: Decode; 
    }
  }
}
export interface Decode {
  id: number;
  username: string;
  role: string;
}


export type UserData = {
  id: number;
  password: string;
  username: string;
};

export type ContactData = {
  id: number;
  ownerId: number;
  firstname: string;
  lastname: string;
  fathername: string;
  description: string;
}

export type ContactnumberData = {
  id: number;
  contactId: number;
  number: string;
  type: string;
}
export type PhoneTypeData = {
  type: string;
}