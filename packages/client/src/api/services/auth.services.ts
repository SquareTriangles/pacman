import { api, ApiResponse } from '../api'
import { ISigninModel, ISignupModel } from '../../models/auth.model'

const AuthService = {
  signin(data: ISigninModel): Promise<ApiResponse> {
    return api.post('/auth/signin', data)
  },
  logout(): Promise<ApiResponse> {
    return api.post('/auth/logout', {})
  },
  signup(data: ISignupModel): Promise<ApiResponse> {
    return api.post('/auth/signup', data)
  },  
}

export default AuthService
