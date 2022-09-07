import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Button, Grid, TextField } from '@mui/material'

const ProfileForm: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        p: 5,
      }}>
      <Paper
        square
        elevation={1}
        sx={{
          position: 'absolute',
          top: '-20px',
          p: 1,
          bgcolor: '#1976D2',
        }}>
        <Typography variant="h6" color="#fff">
          Редактировать профиль
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{mb: 3}}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Имя" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="standard" label="Фамилия" />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Отображаемое имя" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Логин" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Почта" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth variant="standard" label="Телефон" />
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        sx={{
          mt: 3,
          alignSelf: 'flex-start',
        }}>
        Обновить
      </Button>
    </Paper>
  )
}

export default ProfileForm
