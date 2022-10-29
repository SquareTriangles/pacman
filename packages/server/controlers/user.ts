import type { Request, Response, NextFunction } from 'express';
import { UserTable } from '../db'
import type { IUser } from '../models/user';


type TCreateUserData = Omit<IUser, 'id' | 'theme'>;
type TUpdateUserTheme = Pick<IUser, 'id' | 'theme'>;

export const createUser = async (data: TCreateUserData) =>  UserTable.create(data);
export const updateUser = async (userData: IUser) => UserTable.update(userData, { where: { id: userData.id } })
export const updateUserTheme = async (userData: TUpdateUserTheme) => UserTable.update(userData, { where: { id: userData.id } })
export const getAllUsers  = async () => UserTable.findAll({ order: [ ['updatedAt', 'DESC'] ] })

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
    id, firstName, lastName, avatar, email, login, theme,
  } = req.body;
  updateUser({ id, firstName, lastName, avatar, email, login, theme })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const updateUserThemeController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id, theme,
  } = req.body;
  updateUserTheme({ id, theme })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const getAllUsersController = async (req: Request, res: Response, next: NextFunction) => {
  getAllUsers()
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}