import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserModel } from '../../models/user.model'
import { signin, logout, getProfile, updateProfile, signup } from './user.actions'

export interface IAuthState {
  isAuth: boolean
  profile: IUserModel
  error: string
}

const initialState: IAuthState = {
  isAuth: false,
  profile: {} as IUserModel,
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
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
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

export default userSlice.reducer
