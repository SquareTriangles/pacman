import { forumApi, ApiResponse } from '../forumAPI'

import type { 
  IForumUserApiModel,
  IForumCommentApiModel,
  IForumTopicApiModel,
  IForumUserResponceDataApiModel,
  IForumCommentResponceDataApiModel,
  IForumTopicResponceDataApiModel,
} from '../../models/forum.model'

const ForumService = {
  setUser(data: IForumUserApiModel): Promise<ApiResponse<IForumUserResponceDataApiModel>> {
    return forumApi.post('/user', data)
  },
  setTopic(data: IForumTopicApiModel): Promise<ApiResponse<Omit<IForumTopicResponceDataApiModel, 'User'>>> {
    return forumApi.post('/topic', data)
  },
  setComment(data: IForumCommentApiModel): Promise<ApiResponse<Omit<IForumCommentResponceDataApiModel, 'User'>>> {
    return forumApi.post('/comment', data)
  },

  getTopic(): Promise<ApiResponse<Array<IForumTopicResponceDataApiModel>>> {
    return forumApi.get('/topic/all')
  },
  getCommentListByTopicId(tiopicId: string): Promise<ApiResponse<Array<IForumCommentResponceDataApiModel>>> {
    return forumApi.get('/comment/',  { params: { id: tiopicId } })
  },
  getCommentList(): Promise<ApiResponse<Array<IForumCommentResponceDataApiModel>>> {
    return forumApi.get('/comment/all')
  }
}

export default ForumService
