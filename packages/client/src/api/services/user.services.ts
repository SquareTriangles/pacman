import { api, ApiResponse } from '../api'
import { IUserModel, IUpdateProfileModel, IUpdatePasswordModel } from '../../models/user.model'

const AuthService = {
  getProfile(): Promise<ApiResponse<IUserModel>> {
    return api.get('/auth/user')
  },
  updateProfile(data: IUpdateProfileModel): Promise<ApiResponse<IUserModel>> {
    return api.put('/user/profile', data)
  },
  updateAvatar(data: FormData): Promise<ApiResponse<IUserModel>> {
    return api.put('/user/profile/avatar', data)
  },
  updatePassword(data: IUpdatePasswordModel): Promise<ApiResponse<unknown>> {
    return api.put('/user/password', data)
  },
}

export default AuthService
