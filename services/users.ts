import fs from "fs/promises";
import { IUser } from "../interfaces";
import { CustomError } from "../utils/customError";
import { ErrorTypes } from "../middlewares/errorHandler";

//helper function to get read users from json file
async function getUsersFromFile() {
  const data = await fs.readFile("./data.json", { encoding: "utf8" });
  const users: IUser[] = JSON.parse(data);
  return users;
}

const getUsers = async () => {
  const users = await getUsersFromFile();
  return users;
};

const getUser = async (userId: number) => {
  const users = await getUsersFromFile();
  const user = users.find((el) => el.id === userId);
  if (!user) {
    throw new CustomError("User not found", ErrorTypes.NOTFOUND);
  }
  return user;
};

const createUser = async (userData: Omit<IUser, "id">) => {
  const users = await getUsersFromFile();
  const newUser = { ...userData, id: users.at(-1)!.id + 1 };
  users.push(newUser);
  await fs.writeFile("./data.json", JSON.stringify(users));

  return newUser;
};

const updateUser = async (userData: Omit<IUser, "id">, userId: number) => {
  const users = await getUsersFromFile();
  const userIndex = users.findIndex((el) => el.id === userId);
  if (userIndex === -1) {
    throw new CustomError("User not found", ErrorTypes.NOTFOUND);
  }
  const updatedUser = { id: users[userIndex].id, ...userData };
  users[userIndex] = updatedUser;
  await fs.writeFile("./data.json", JSON.stringify(users));

  return updatedUser;
};

const deleteUser = async (userId: number) => {
  const users = await getUsersFromFile();
  const user = users.find((el) => el.id === userId);
  if (!user) {
    throw new CustomError("User not found", ErrorTypes.NOTFOUND);
  }

  const filteredUsers = users.filter((user) => user.id !== userId);
  await fs.writeFile("./data.json", JSON.stringify(filteredUsers));
};

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
