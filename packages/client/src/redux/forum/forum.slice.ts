import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IforumTopicModel, IForumTopicResponceDataApiModel, IForumCommentResponceDataApiModel } from '../../models/forum.model'
import * as actions from './forum.actions';


export interface IforumState {
  topicList: IForumTopicResponceDataApiModel[],
  comments: actions.TTopicData,
}

const initialState: IforumState = {
  topicList: [],
  comments: {},
}


export const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    setTopicList: (state, action: PayloadAction<IForumTopicResponceDataApiModel[]>) => {
      state.topicList = [...state.topicList, ...action.payload]
    },
  },
  extraReducers: builder => {
    builder.addCase(actions.getTopicList.fulfilled, (state, action) => {
      state.topicList = action.payload
    })
    builder.addCase(actions.getCommentList.fulfilled, (state, action) => {
      state.comments = action.payload
    })
    builder.addCase(actions.setTopic.fulfilled, (state, action) => {
      state.topicList.push(action.payload)
    })
    builder.addCase(actions.setMessage.fulfilled, (state, action) => {
      const { topic } = action.payload;
      const comments = state.comments;
      const topicComments = comments[topic] || [];
      topicComments.push(action.payload);
      state.comments[topic] = topicComments;
    })
  },
})

export default forumSlice.reducer
