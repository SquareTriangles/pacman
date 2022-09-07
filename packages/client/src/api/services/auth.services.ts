import { api, ApiResponse } from '../api'
import { ISigninModel } from '../../models/auth.model'

const AuthService = {
  signin(data: ISigninModel): Promise<ApiResponse> {
    return api.post('/auth/signin', data)
  },
  logout(): Promise<ApiResponse> {
    return api.post('/auth/logout', {})
  },
}

export default AuthService
