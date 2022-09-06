import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IUserModel } from '../../models/user.model'
import UserService from '../../api/services/user.services'

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

export interface IAuthState {
  user: IUserModel
}

const initialState: IAuthState = {
  user: {} as IUserModel,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export default userSlice.reducer
