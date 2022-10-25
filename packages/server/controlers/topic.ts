import type { Request, Response, NextFunction } from 'express';
import { TopicTable } from '../db'
import type { ITopic } from '../models/topic';

type TCreateTopicData = Omit<ITopic, 'id'>

export const createTopic = async (data: TCreateTopicData) =>  TopicTable.create(data);
export const updateTopic  = async (topicData: ITopic) => TopicTable.update(topicData, { where: { id: topicData.id } })
export const removeTopic  = async (id: string) => TopicTable.destroy( { where: { id: id } })
export const getAllTopic  = async () => TopicTable.findAll({ order: [ ['updatedAt', 'DESC'] ] })
export const getTopicById  = async (id: string) => TopicTable.findByPk(id)

export const createTopicController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    header, body, owner,
  } = req.body;
  createTopic({ header, body, owner })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const updateTopicController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id, header, body, owner,
  } = req.body;
  updateTopic({ id, header, body, owner })
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const removeTopicController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id
  } = req.query;
  removeTopic(id as string)
    .then((data) => {
      res.send({ data })
    })
    .catch(next)
}

export const getAllTopicController = async (req: Request, res: Response, next: NextFunction) => {
  getAllTopic()
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}

export const getTopicByIdController = async (req: Request, res: Response, next: NextFunction) => {
  const {
    id
  } = req.query;
  getTopicById(id as string)
    .then((data) => {
      res.send(data)
    })
    .catch(next)
}