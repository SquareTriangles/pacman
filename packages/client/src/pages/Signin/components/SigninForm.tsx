import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { signin } from '../../../redux/user/user.actions'
import { ISigninModel } from '../../../models/auth.model'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import {
  login as loginRegisterOptions,
  password as passwordRegisterOptions,
} from '../../../utils/registerOptions'

const SigninForm: React.FC = () => {
  const dispatch = useAppDispatch()  
  const navigate = useNavigate()

  const { isAuth } = useAppSelector(state => state.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISigninModel>({ mode: 'onSubmit' })

  useEffect(() => {
    if (isAuth) navigate('/')
  }, [navigate, isAuth])

  const onSubmit = async (data: ISigninModel) => {
    dispatch(signin(data))
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <TextField
        label="Логин"
        fullWidth
        margin="normal"
        {...register('login', loginRegisterOptions)}
        error={!!errors.login}
        helperText={errors.login ? `${errors.login?.message}` : ''}
      />
      <TextField
        type="password"
        label="Пароль"
        fullWidth
        margin="normal"
        {...register('password', passwordRegisterOptions)}
        error={!!errors.password}
        helperText={errors.password ? `${errors.password?.message}` : ''}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Войти
      </Button>
      <Link
        component={RouterLink}
        to="/signup"
        style={{ textDecoration: 'none' }}>
        <Typography variant="subtitle2" align="center">
          Еще нет аккаунта? Зарегистрироваться.
        </Typography>
      </Link>
    </Box>
  )
}

export default SigninForm
