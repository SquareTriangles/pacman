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