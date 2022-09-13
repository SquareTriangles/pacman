import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { signup } from '../../../redux/user/user.actions'
import { ISignupModel } from '../../../models/auth.model'
import { useNavigate } from 'react-router-dom'

interface ISignupFormModel extends ISignupModel {
  passwordConfirm: string
}

const SignupForm: React.FC = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<ISignupFormModel>({
    mode: 'onChange'
  });
  const dispatch = useAppDispatch()
  const { error } = useAppSelector(state => state.user)
  const navigate = useNavigate()

  const passwordRef = useRef()

  const onSubmit: SubmitHandler<ISignupFormModel> = async (data) => {
    const response = await dispatch(signup(data))
    if(response.meta.requestStatus === 'fulfilled'){
      navigate('/signin')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography color="error" variant="caption">
        {error && error}
      </Typography>
      <Stack justifyContent="center">
        <Controller
          defaultValue=""
          name="first_name"
          rules={{ pattern: /[A-Za-z]{3}/, required: true }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.first_name)}
              label="Имя"
              variant="standard"
              helperText={errors.first_name && 'Имя должно содержать от 3-х букв'}
            />}
        />
        <Controller
          defaultValue=""
          name="second_name"
          rules={{ pattern: /[A-Za-z]{3}/, required: true }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.second_name)}
              label="Фамилия"
              variant="standard"
              helperText={errors.second_name && 'Фамилия должна содержать от 3-х букв'}
            />}
        />
        <Controller
          defaultValue=""
          name="email"
          rules={{
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            required: true
          }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.email)}
              label="Email"
              variant="standard"
              helperText={errors.email && 'Неверный формат почты'}
            />}
        />
        <Controller
          defaultValue=""
          name="phone"
          rules={{ pattern: /[0-9]{11}/, required: true }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.phone)}
              label="Телефон"
              variant="standard"
              helperText={errors.phone && 'Телефон должен содержать 11 цифр'}
            />}
        />
        <Controller
          defaultValue=""
          name="login"
          rules={{ pattern: /[A-Za-z0-9]{5}/, required: true }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.login)}
              label="Логин"
              variant="standard"
              helperText={errors.login && 'Логин должен содержать от 5 символов букв или цифр'}
            />}
        />
        <Controller
          defaultValue=""
          name="password"
          rules={{ required: true }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.password)}
              label="Пароль"
              variant="standard"
              type="password"
              inputRef={passwordRef}
              helperText={errors.password && 'Обязательно к заполнению'}
            />}
        />
        <Controller
          defaultValue=""
          name="passwordConfirm"
          rules={{
            validate: value => value === ((passwordRef.current as any).value),
            required: true
          }}
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              error={Boolean(errors.passwordConfirm)}
              label="Подтвердить пароль"
              variant="standard"
              type="password"
              helperText={errors.passwordConfirm && 'Пароли должны совпадать'}
            />}
        />
        <Button sx={{ mt: '15px' }} type='submit' variant="contained">Зарегистрировать</Button>
      </Stack>
    </form>
  )
}

export default SignupForm