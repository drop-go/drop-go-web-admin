import React from 'react'
import { Box, Center, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { SignUpForm } from '../components/SignUpForm'

export const SignUp = () => {
  return (
    <div>
      <Center mt="50px">
        <div>
          <Box p={4} w="400px" border="1px" borderColor="gray.200" borderRadius="5px">
            <SignUpForm />
          </Box>
          <Text m="10px">
            <Link to="/login">
              <ChakraLink color="brand.500">すでにアカウントを持っている方はこちら</ChakraLink>
            </Link>
          </Text>
        </div>
      </Center>
    </div>
  )
}
