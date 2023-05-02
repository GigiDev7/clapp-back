import { Request, Response, NextFunction } from "express";
import { ErrorTypes } from "../utils/interfaces";

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
