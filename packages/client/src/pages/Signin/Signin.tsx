import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SigninForm from './components/SigninForm'

const Signin: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{ py: 6 }}>
      <Typography component="h1" variant="h5" align="center">
        Вход
      </Typography>
      <SigninForm />
    </Container>
  )
}

export default Signin
