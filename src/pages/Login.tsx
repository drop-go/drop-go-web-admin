import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import { LoginForm } from '../components/LoginForm'

export const Login = () => {
  return (
    <div>
      <Center mt="50px">
        <Box p={4} w="400px" border="1px" borderColor="gray.200" borderRadius="5px">
          <LoginForm />
        </Box>
      </Center>
    </div>
  )
}
