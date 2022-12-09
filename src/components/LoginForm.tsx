import React from 'react'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center } from '@chakra-ui/react'
import { useAuthQuery } from '../hooks/useAuthQuery'

export const LoginForm = () => {
  const { error, login } = useAuthQuery()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = (data: any) => login(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center m="40px auto" h="80px" w="80px">
        <h2>
          <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="DropGo Admin" width="100%" />
        </h2>
      </Center>
      <span>{error}</span>
      <FormControl isInvalid={errors.name ? true : false} mb="5px">
        <FormLabel htmlFor="email">メールアドレス</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="example@example.com"
          {...register('email', {
            required: '必須項目です',
          })}
        />
        <FormErrorMessage>{(errors.name && errors.email?.message) as string}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name ? true : false} mb="5px">
        <FormLabel htmlFor="password">パスワード</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register('password', {
            required: '必須項目です',
          })}
        />
        <FormErrorMessage>{(errors.name && errors.email?.message) as string}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="brand" isLoading={isSubmitting} type="submit" w={'100%'}>
        ログイン
      </Button>
    </form>
  )
}
