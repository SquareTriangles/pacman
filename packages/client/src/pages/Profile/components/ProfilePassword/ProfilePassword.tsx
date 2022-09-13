import React from 'react'
import { useAppDispatch } from '../../../../hooks'
import { IUpdatePasswordModel } from '../../../../models/user.model'
import { updatePassword } from '../../../../redux/user/user.actions'
import { useForm } from 'react-hook-form'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export interface IProfilePasswordProps {
  loading: boolean
}

const ProfilePassword: React.FC<IProfilePasswordProps> = ({ loading }) => {
  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm<IUpdatePasswordModel>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: IUpdatePasswordModel) => {
    dispatch(updatePassword(data))
  }

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        p: 5,
      }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              type="password"
              label="Старый пароль"
              {...register('oldPassword', { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              type="password"
              label="Новый пароль"
              {...register('newPassword', { required: true })}
            />
          </Grid>
        </Grid>

        <Button
          variant="outlined"
          type="submit"
          sx={{
            mt: 3,
            alignSelf: 'flex-start',
          }}>
          Изменить пароль
          {loading && <CircularProgress size={20} sx={{ ml: 2 }} />}
        </Button>
      </Box>
    </Paper>
  )
}

export default ProfilePassword
