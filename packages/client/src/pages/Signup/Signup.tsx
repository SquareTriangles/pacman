import type React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SignupForm from './components/SignupForm'

const Signup: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Typography textAlign="center" variant="h5">Регистрация</Typography>
      <SignupForm></SignupForm>
    </Container>
  )
}

export default Signup
