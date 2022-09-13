import { createAsyncThunk } from '@reduxjs/toolkit'
import { IUserModel } from '../../models/user.model'
import { ISigninModel, ISignupModel } from '../../models/auth.model'
import AuthService from '../../api/services/auth.services'
import UserService from '../../api/services/user.services'

export const signup = createAsyncThunk(
  'user/signup',
  async (payload: ISignupModel, thunkApi) => {
    try{
      const { data } = await AuthService.signup(payload)
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
  async (payload: IUserModel) => {
    const { data } = await UserService.updateProfile(payload)
    return data
  }
)
