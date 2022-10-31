import { createAsyncThunk } from '@reduxjs/toolkit'
import ForumService from '../../api/services/forum.service'
import { IforumTopicModel, IforumMessageModel, IForumTopicApiModel, IForumCommentResponceDataApiModel, IForumCommentApiModel } from '../../models/forum.model'
import { RootState } from '../store';
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

export type TTopicData = {
  [key: string]: Array<IForumCommentResponceDataApiModel>
}

export const getTopicList = createAsyncThunk(
  'forum/getTopicList',
  async () => {
    const { data } = await ForumService.getTopic();
    console.log(data)
    return data
  }
)

export const getCommentList = createAsyncThunk(
  'forum/getCommentList',
  async () => {
    const { data } = await ForumService.getCommentList();
    
    const res: TTopicData = data.reduce((res, item) => {
      const topicId = item.topic;
      if (res[topicId]) {
        res[item.topic].push(item)
      } else {
        res[item.topic] = []
      }
      return res
    }, {} as TTopicData)

    return res;
  }
)


export const setTopic = createAsyncThunk(
  'forum/setTopic',
  async (payload: IForumTopicApiModel, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const user = state.user.profile;
    const { data } = await ForumService.setTopic(payload);
    const topicData = {
      ...data,
      User: {
        firstName: user.first_name,
        lastName: user.second_name,
        avatar: user.avatar,
        email: user.email,
        login: user.login,
      }
    };
    return topicData
  }
)

export const setMessage = createAsyncThunk(
  'forum/setMessage',
  async (payload: IForumCommentApiModel, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const user = state.user.profile;
    const { data } = await ForumService.setComment(payload)
    return {
      ...data,
      User: {
        firstName: user.first_name,
        lastName: user.second_name,
        avatar: user.avatar,
        email: user.email,
        login: user.login,
      }
    }
  }
);