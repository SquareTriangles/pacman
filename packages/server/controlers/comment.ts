import type { Request, Response, NextFunction } from 'express';
import { CommentTable, UserTable } from '../db'
import type { IComment } from '../models/comment';

type TCreateCommentcData = Omit<IComment, 'id'>

export const createComment = async (data: TCreateCommentcData) =>  CommentTable.create(data, {
  include: UserTable,
});
export const updateComment  = async (topicData: IComment) => CommentTable.update(topicData, { where: { id: topicData.id } })
export const removeComment  = async (id: string) => CommentTable.destroy( { where: { id: id } })
export const getAllComment  = async () => CommentTable.findAll({ order: [ ['updatedAt', 'DESC'] ], include: [ UserTable ] })
export const getCommenByTopicId  = async (id: string) => CommentTable.findAll({ where: { topic: id }, include: [ UserTable ]})
export const getAnswerList = async (questionCommentId: string) => CommentTable.findAll({ where: { questionCommentId: questionCommentId },  include: [ UserTable ]})

export const createCommentController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    body, topic, owner, questionCommentId = null,
  } = req.body;
  createComment({ body, topic, owner, questionCommentId })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const updateCommentController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id, body, topic, owner, questionCommentId = null,
  } = req.body;
  updateComment({ id, body, topic, owner, questionCommentId, })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const removeCommentController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id
  } = req.query;
  removeComment(id as string)
    .then((data) => {
      res.send({ data })
    })
    .catch(next)
}

export const getAllCommentController = async (req: Request, res: Response, next: NextFunction) => {
  getAllComment()
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const getCommentByTopicIdController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id
  } = req.query;
  getCommenByTopicId(id as string)
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const getAnswerListController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id
  } = req.query;
  getAnswerList(id as string)
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}