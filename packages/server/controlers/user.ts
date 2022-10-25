import type { Request, Response, NextFunction } from 'express';
import { UserTable } from '../db'
import type { IUser } from '../models/user';


type TCreateUserData = Omit<IUser, 'id'>;

export const createUser = async (data: TCreateUserData) =>  UserTable.create(data);
export const updateUser = async (userData: IUser) => UserTable.update(userData, { where: { id: userData.id } })

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    firstName, lastName, avatar, email, login,
  } = req.body;
  createUser({ firstName, lastName, avatar, email, login, })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id, firstName, lastName, avatar, email, login,
  } = req.body;
  updateUser({ id, firstName, lastName, avatar, email, login, })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}