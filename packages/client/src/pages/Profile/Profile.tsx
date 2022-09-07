import React from 'react'
import Container from '@mui/material/Container'
import ProfileInfo from './components/ProfileInfo'
import { useAppSelector } from '../../hooks'
import ProfileForm from './components/ProfileForm'
import { Grid } from '@mui/material'

const Profile: React.FC = () => {
  const { profile } = useAppSelector(state => state.user)

  return (
    <Container maxWidth="md" sx={{ pt: 15 }}>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} md={5}>
          <ProfileInfo profile={profile} />
        </Grid>
        <Grid item xs={12} md={7}>
          <ProfileForm />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profile
