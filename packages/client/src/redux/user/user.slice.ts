import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserModel } from '../../models/user.model'

import {
  signin,
  signup,
  logout,
  getProfile,
  updateProfile,
  updateAvatar,
} from './user.actions'
import avatarImage from '../../assets/images/avatar.png'
import { RootState } from '../store'

export interface IAuthState {
  isAuth: boolean
  profile: IUserModel
  loading: boolean
  error: string
}

const initialState: IAuthState = {
  isAuth: false,
  profile: {
    first_name: '',
    second_name: '',
    email: '',
    phone: '',
    display_name: '',
    avatar: '',
  } as IUserModel,
  loading: true,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<IUserModel>>) => {
      state.profile = { ...state.profile, ...action.payload }
    },
  },
  extraReducers: builder => {
    builder.addCase(signin.fulfilled, state => {
      state.isAuth = true
      state.error = ''
    })
    builder.addCase(signin.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(logout.fulfilled, state => {
      state.isAuth = false
    })
    builder.addCase(getProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action.payload
      if (action.payload) {
        state.isAuth = true
      }
    })
    builder.addCase(updateProfile.pending, state => {
      state.loading = true
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action.payload
    })
    builder.addCase(updateAvatar.pending, state => {
      state.loading = true
    })
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.loading = false
      state.profile = action.payload
    })
    builder.addCase(signup.fulfilled, state => {
      state.error = ''
    })
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.payload as string
    })
  }
})

export const selectAvatar = (state: RootState) =>
  `https://ya-praktikum.tech/api/v2/resources${state.user.profile.avatar}` ||
  avatarImage

export default userSlice.reducer
