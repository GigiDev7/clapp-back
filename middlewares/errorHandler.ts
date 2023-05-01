import { Request, Response, NextFunction } from "express";

export enum ErrorTypes {
  NOTFOUND = "Not Found Error",
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.name === ErrorTypes.NOTFOUND) {
    return res.status(404).json({ msg: err.message || "Not Found" });
  }
};
