import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../hooks'
import { IUserModel, IUpdateProfileModel } from '../../../../models/user.model'
import { useForm } from 'react-hook-form'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import {
  updateAvatar,
  updateProfile,
} from '../../../../redux/user/user.actions'

export interface IProfileSettingsProps {
  profile: IUserModel
  loading: boolean
}

const ProfileSettings: React.FC<IProfileSettingsProps> = ({
  profile,
  loading,
}) => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<IUpdateProfileModel>({
    mode: 'onSubmit',
  })

  const onSubmit = (data: IUpdateProfileModel) => {
    dispatch(updateProfile(data))
  }

  const uploadAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    const formData = new FormData()
    formData.append('avatar', file, file?.name)

    dispatch(updateAvatar(formData))
  }

  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        p: 5,
        pt: 12,
      }}>
      <Paper
        square
        elevation={10}
        sx={{
          position: 'absolute',
          top: '-80px',
          alignSelf: 'center',
        }}>
        <Avatar
          alt="avatar"
          src={profile.avatar}
          variant="rounded"
          sx={{
            width: 160,
            height: 160,
            opacity: 0.3,
          }}
        />
        <IconButton
          component="label"
          sx={{
            position: 'absolute',
            top: 'calc(50% - 51px / 2)',
            left: 'calc(50% - 51px / 2)',
          }}>
          <input hidden accept="image/*" type="file" onChange={uploadAvatar} />
          <AddAPhotoIcon fontSize="large" />
        </IconButton>
      </Paper>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="standard"
              label="Имя"
              defaultValue={profile.first_name}
              {...register('first_name', { required: true })}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="standard"
              label="Фамилия"
              defaultValue={profile.second_name}
              {...register('second_name')}
            />
          </Grid>
        </Grid>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Отображаемое имя"
              defaultValue={profile.display_name}
              {...register('display_name')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Логин"
              defaultValue={profile.login}
              {...register('login')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Почта"
              defaultValue={profile.email}
              {...register('email')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="standard"
              label="Телефон"
              defaultValue={profile.phone}
              {...register('phone')}
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
          <span>Обновить профиль</span>
          {loading && <CircularProgress size={20} sx={{ ml: 2 }} />}
        </Button>
      </Box>
    </Paper>
  )
}

export default ProfileSettings
