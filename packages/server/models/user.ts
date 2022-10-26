import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUser {
    id: string,
    firstName: string;
    lastName: string;
    avatar: string,
    login: string,
    email: string,
    theme: string,
}

export const userModel: ModelAttributes<Model, IUser> = {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataType.TEXT,
      allowNull: false
    },
    lastName: {
        type: DataType.TEXT,
        allowNull: false
    },
    login: {
      type: DataType.TEXT,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataType.TEXT,
      allowNull: false,
      unique: true,
    },
    avatar: {
      type: DataType.TEXT,
    },
    theme: {
      type: DataType.TEXT,
      allowNull: false,
      defaultValue: '#fccf00'
    },
  };
