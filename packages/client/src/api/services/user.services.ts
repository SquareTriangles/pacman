import { api, ApiResponse } from '../api'
import { IUserModel } from '../../models/user.model'

const AuthService = {
  getProfile(): Promise<ApiResponse<IUserModel>> {
    return api.get('/auth/user')
  },
  updateProfile(data: IUserModel): Promise<ApiResponse<IUserModel>> {
    return api.put('/user/profile', data)
  },
}

export default AuthService
