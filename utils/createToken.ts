import jwt from "jsonwebtoken";

export const createToken = (id: number, username: string, role: string) =>
  jwt.sign({ id, username, role }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "1d",
  });
