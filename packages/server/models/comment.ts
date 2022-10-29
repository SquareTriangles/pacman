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
      allowNull: true,
    },
    owner: {
      type: DataType.UUID,
      allowNull: true,
    }
  };