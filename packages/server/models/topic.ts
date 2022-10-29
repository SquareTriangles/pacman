import { DataType, Model, } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface ITopic {
  id: string,
  header: string,  
  body: string,
  owner: string,
}


export const topicModel: ModelAttributes<Model, ITopic> = {
    id: {
      type: DataType.UUID,
      primaryKey: true
    },
    header: {
      type: DataType.TEXT,
      allowNull: false
    },
    body: {
        type: DataType.TEXT,
        allowNull: false
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