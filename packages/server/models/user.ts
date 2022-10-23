import { DataType, Model } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IUser {
    id: string,
    firstName: string;
    lastName: string;
    avatar: string,
}

export const userModel: ModelAttributes<Model, IUser> = {
    id: {
      type: DataType.UUID,
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
    avatar: {
      type: DataType.TEXT,
    }
  };