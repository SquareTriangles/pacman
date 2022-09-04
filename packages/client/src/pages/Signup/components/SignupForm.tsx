import React, { useState, useRef } from 'react'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import AuthController, { IUserData } from '../../../controllers/Auth.controller'

  interface IUserDataSignup extends IUserData {
    passwordConfirm?: string
  }

  const SignupForm: React.FC = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<IUserDataSignup>({
      mode: 'onChange'
    });

    const [apiResponseError, setApiResponseError] = useState<string | undefined>()

    const [userData, setUserData] = useState<IUserDataSignup>({
      firstName: '',
      secondName: '',
      login: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phone: ''
    })
    const passwordRef = useRef()
    const onSubmit: SubmitHandler<IUserDataSignup> = async (data) => {
      const response = await AuthController.signup(data)
      setApiResponseError(response)
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
          <Typography color="error" variant="caption">
            {apiResponseError && apiResponseError}
          </Typography>          
        <Stack justifyContent="center">
        <Controller
          {...register("firstName", { 
            required: true,
            pattern: /[A-Za-z]{3}/
          })}
          defaultValue=""
          control={control}
          render={({ field, fieldState }) => 
            <TextField 
              {...field} 
              label="Имя" 
              variant="standard"
            />}
         />
         <Typography color="error" variant="caption">
          {errors.firstName ? 'Имя должно содержать от 3-х букв' : " "}
          </Typography>

        <Controller
        defaultValue=""
          {...register("secondName", { 
            required: true,
            pattern: /[A-Za-z]{3}/
          })}
          control={control}
          render={({ field }) => 
            <TextField 
              {...field}
              label="Фамилия" 
              variant="standard" 
          />}
        />        
         <Typography color="error" variant="caption">
          {errors.secondName && 'Фамилия должна содержать от 3-х букв'}
          </Typography>

        <Controller
        defaultValue=""
          {...register("email", { 
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
          })}
          control={control}
          render={({ field }) => 
            <TextField 
              {...field}
              label="Email" 
              variant="standard" 
          />}
        /> 
        <Typography color="error" variant="caption">
          {errors.email && 'Неверный формат почты'}
        </Typography>

        <Controller
        defaultValue=""
          {...register("phone", { 
            required: true,
            pattern: /[0-9]{11}/
          })}
          control={control}
          render={({ field }) => 
            <TextField 
              {...field}
              label="Телефон" 
              variant="standard" 
          />}
        />
        <Typography color="error" variant="caption">
          {errors.phone && 'Телефон должен содержать 11 цифр'}
        </Typography>

        <Controller
        defaultValue=""
          {...register("login", { 
            required: true,
            pattern: /[A-Za-z0-9]{5}/
          })}
          control={control}
          render={({ field }) => 
            <TextField 
              {...field}
              label="Логин" 
              variant="standard" 
          />}
        /> 
        <Typography color="error" variant="caption">
          {errors.login && 'Логин должен содержать от 5 символов букв или цифр'}
        </Typography>

        <Controller
        defaultValue=""
          {...register("password", { 
            required: true
          })}
          control={control}
          render={({ field }) => 
            <TextField 
              {...field}
              label="Пароль" 
              variant="standard"
              type="password"
              inputRef = {passwordRef}
          />}
        />
        <Typography color="error" variant="caption">
          {errors.password && 'Обязательно к заполнению'}
        </Typography>

        <Controller
        defaultValue=""
          {...register("passwordConfirm", { 
            required: true,
            validate: value => value === ((passwordRef.current as any).value)
          })}
          control={control}
          render={({ field }) => 
            <TextField
              {...field}
              label="Подтвердить пароль" 
              variant="standard"
              type="password"
              helperText={errors.passwordConfirm && 'Пароли должны совпадать'}
          />}
        />
        <Typography color="error" variant="caption">
          {errors.passwordConfirm && 'Пароли должны совпадать'}
        </Typography>

          <Button sx={{mt:'15px'}}type='submit' variant="contained">Зарегистрировать</Button>
        </Stack>
        </form>
    )
  }

  export default SignupForm