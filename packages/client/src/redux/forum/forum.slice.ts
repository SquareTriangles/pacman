import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IforumTopicModel } from '../../models/forum.model'
import * as actions from './forum.actions';


export interface IforumState {
  topicList: IforumTopicModel[]
}

const initialState: IforumState = {
  topicList: [],
}


export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopicList: (state, action: PayloadAction<IforumTopicModel[]>) => {
      state.topicList = [...state.topicList, ...action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(actions.getTopicList.fulfilled, (state, action) => {
      state.topicList = action.payload
    })
    builder.addCase(actions.setTopic.fulfilled, (state, action) => {
      state.topicList.push(action.payload)
    })
    builder.addCase(actions.setMessage.fulfilled, (state, action) => {
      const { topicId, message } = action.payload;
      const updatedtopicList = state.topicList.map((topic) => {
        if (topic._id === topicId) {
          const messageList = topic.messageList;
          messageList.push(message);
          const updatedTopic = {
            ...topic,
            messageList,
          };
          return updatedTopic
        }
        return topic
      })
      state.topicList = updatedtopicList;
    })
  },
})

export default forumSlice.reducer
