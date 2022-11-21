import type React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import SigninForm from './components/SigninForm'
import OAuthPanel from './components/OAuth';

const Signin: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{ py: 6 }}>
      <Typography component="h1" variant="h5" align="center">
        Вход
      </Typography>
      <SigninForm />
      <OAuthPanel />
    </Container>
  )
}

export default Signin
