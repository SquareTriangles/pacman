import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
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
