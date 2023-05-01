import { Request, Response, NextFunction } from "express";
import usersService from "../services/users";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await usersService.getUsers();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = +req.params.userId;
    const result = await usersService.getUser(userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await usersService.createUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = +req.params.userId;
    const result = await usersService.updateUser(req.body, userId);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = +req.params.userId;
    await usersService.deleteUser(userId);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
