import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUpdateProfileModel, IUpdatePasswordModel } from '../../models/user.model'

import { IUserModel } from '../../models/user.model'
import { ISigninModel, ISignupModel } from '../../models/auth.model'
import { IYandexSigninModel } from '../../models/yandexAuth.model';

import AuthService from '../../api/services/auth.services'
import UserService from '../../api/services/user.services'
import YandexAuth  from '../../api/services/yandexAuth.services'
import ForumService from '../../api/services/forum.service';

const setUserDataInForum = async (userId: string) => {
  const { data } = await UserService.getProfile()
  ForumService.setUser({
    id: String(data.id),
    firstName: data.first_name,
    lastName: data.second_name,
    avatar: data.avatar,
    email: data.email,
    login: data.login,
  })
}

export const signup = createAsyncThunk(
  'user/signup',
  async (payload: ISignupModel, thunkApi) => {
    try{
      const { data } = await AuthService.signup(payload)
      setUserDataInForum(String(data.id))
      return data
    }catch(e: any){
      return thunkApi.rejectWithValue(e.response.data.reason)
    }
  }
)

export const signin = createAsyncThunk(
  'user/signin',
  async (payload: ISigninModel, thunkApi) => {
    try{
      const { data } = await AuthService.signin(payload)
      return data
    }catch(e: any){
      return thunkApi.rejectWithValue(e.response.data.reason)
    }
  }
)

export const logout = createAsyncThunk('user/logout', async () => {
  const { data } = await AuthService.logout()
  return data
})

export const getProfile = createAsyncThunk('user/getProfile', async () => {
  const { data } = await UserService.getProfile()
  return data
})

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (payload: IUpdateProfileModel) => {
    const { data } = await UserService.updateProfile(payload)
    return data
  }
)

export const updateAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (payload: FormData) => {
    const { data } = await UserService.updateAvatar(payload)
    return data
  }
)

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (payload: IUpdatePasswordModel) => {
    const { data } = await UserService.updatePassword(payload)
    return data
  }
)

export const getOAuthYandexServiceId = createAsyncThunk(
  'user/yandexOAuthServiceId',
  async (redirect_uri: string) => {
    const { data } = await YandexAuth.getServiceID({ redirect_uri })
    return data
  }
)

export const signinWithOAuthYandex = createAsyncThunk(
  'user/siginWithYandexOAuth',
  async (params: IYandexSigninModel) => {
    const { data } = await YandexAuth.signin(params)
    return data
  }
)
