type Tuser = {
  name: string,
  photo: string,
}

export interface IforumMessageModel {
  body: string,
  user: Tuser,
  date: number,
}

export interface IforumTopicModel {
  _id: number,
  header: string,
  body :string,
  messageList: IforumMessageModel[],
  owner: Tuser,
}

interface IForumDates {
  createdAt: string,
  updatedAt: string,
}

export interface IForumUserApiModel {
  id: string,
  firstName: string,
  lastName: string,
  avatar: string | null,
  email: string,
  login: string,
}

export interface IForumUserResponceDataApiModel extends IForumUserApiModel, IForumDates {
  id: string,
  theme: string,
}

export interface IForumCommentApiModel {
  body: string,
  questionCommentId: string | null,
  topic: string,
  owner: string,
}

export interface IForumCommentResponceDataApiModel extends IForumCommentApiModel, IForumDates {
  User: Omit<IForumUserApiModel,'id'> | null
}

export interface IForumTopicApiModel {
  header: string,
  body: string,
  owner: string,
}

export interface IForumTopicResponceDataApiModel extends IForumTopicApiModel, IForumDates {
  id: string,
  User: Omit<IForumUserApiModel,'id'> | null
}
