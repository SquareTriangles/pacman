import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserModel } from '../../models/user.model'
import { signin, logout, getProfile, updateProfile } from './user.actions'

export interface IAuthState {
  isAuth: boolean
  profile: IUserModel
}

const initialState: IAuthState = {
  isAuth: false,
  profile: {} as IUserModel,
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
    })
    builder.addCase(logout.fulfilled, state => {
      state.isAuth = false
    })
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    })
  },
})

export default userSlice.reducer
