import React from 'react'
import { Box } from '@chakra-ui/react'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
  return (
    <div>
      <Box p={4}>
        <LoginForm />
      </Box>
    </div>
  )
}
