import { DataType, Model, } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IComment {
  id: string,
  body: string,
  topic: string,
  owner: string,
}

export const commentModel: ModelAttributes<Model, IComment> = {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    body: {
        type: DataType.TEXT,
        allowNull: false
    },
    topic: {
      type: DataType.UUID,
      references: 
      { 
        model: 'User', 
        key: 'id',
      }
    },
    owner: {
      type: DataType.UUID,
      references: 
      { 
        model: 'User', 
        key: 'id',
      }
    }
  };