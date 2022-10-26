import { DataType, Model, } from 'sequelize-typescript';
import type { ModelAttributes } from 'sequelize/types';

export interface IComment {
  id: string,
  body: string,
  questionCommentId: string | null,
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
    questionCommentId: {
      type: DataType.TEXT,
      allowNull: true
    },
    topic: {
      type: DataType.UUID,
      references: 
      { 
        model: 'Topic', 
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