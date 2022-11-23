import React from 'react'
import { Box, Center, Link as ChakraLink, Text } from '@chakra-ui/react'
import { LoginForm } from '../components/LoginForm'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
      <Center mt="50px">
        <div>
          <Box p={4} w="400px" border="1px" borderColor="gray.200" borderRadius="5px">
            <LoginForm />
          </Box>
          <Text m="10px">
            <Link to="/new">
              <ChakraLink color="brand.500">新規アカウント作成</ChakraLink>
            </Link>
          </Text>
          <Text m="10px">
            <ChakraLink href="" color="brand.500">
              パスワードを忘れた
            </ChakraLink>
          </Text>
        </div>
      </Center>
    </div>
  )
}
