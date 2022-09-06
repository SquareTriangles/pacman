import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ISigninModel } from '../../models/auth.model'
import AuthService from '../../api/services/auth.services'

export const signin = createAsyncThunk(
  'auth/signin',
  async (payload: ISigninModel) => {
    return await AuthService.signin(payload)
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  return await AuthService.logout()
})

export interface IAuthState {
  isAuth: boolean
}

const initialState: IAuthState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signin.fulfilled, state => {
      state.isAuth = true
    })
    builder.addCase(logout.fulfilled, state => {
      state.isAuth = false
    })
  },
})

export default authSlice.reducer
