import { createAsyncThunk } from '@reduxjs/toolkit'
import { IforumTopicModel, IforumMessageModel } from '../../models/forum.model'
import pacmanImage from '../../assets/images/pacman.png'

const getRundomNumber = () => Math.ceil(Math.random() * 1000)

const TempMessageData = {
  user: {
    name: 'pacman',
    photo: '',
  },
  date: 1,
  body: 'some_message_text',
}
//     replyNumber: getRundomNumber(), color: getRandomArrayitem(COLOR_LIST), userName: 'pacman',

const tempTopicData = [
  {
    _id: getRundomNumber(),
    header: 'Some question_1',
    body: '',
    messageList: [TempMessageData, TempMessageData],
    owner: {
      name: 'batman',
      photo: pacmanImage
    }
  },
  {
    _id: getRundomNumber(),
    header: 'Some question_2',
    body: '',
    messageList: [TempMessageData, TempMessageData],
    owner: {
      name: 'batman',
      photo: pacmanImage
    }
  },
  {
    _id: getRundomNumber(),
    header: 'Some question_3',
    body: '',
    messageList: [TempMessageData, TempMessageData],
    owner: {
      name: 'batman',
      photo: pacmanImage
    }
  },
  {
    _id: getRundomNumber(),
    header: 'Some question_4',
    body: '',
    messageList: [TempMessageData, TempMessageData],
    owner: {
      name: 'batman',
      photo: pacmanImage
    }
  },
]


export const getTopicList = createAsyncThunk(
  'forum/getTopicList',
  async () => {
    return tempTopicData
  }
)


export const setTopic = createAsyncThunk(
  'forum/setTopic',
  async (payload: Omit<IforumTopicModel, '_id'|'messageList'|'owner'>) => {
    const { header, body, } = payload;

    const user = {
      name: 'spiderMan',
      photo: pacmanImage,
    }
    const newTopic = {
      _id: getRundomNumber(),
      header,
      body,
      messageList: [{
        body,
        user,
        date: getRundomNumber(),
      }],
      owner: user,
    }
    return newTopic
  }
)

export const setMessage = createAsyncThunk(
  'forum/setMessage',
  async (payload: { topicId: number, body: string }) => {
    const message:IforumMessageModel = {
      body: payload.body,
      date: getRundomNumber(),
      user: {
        name: 'shrek',
        photo: pacmanImage,
      },
    };
    return { topicId: payload.topicId, message }
  }
);