import React from 'react'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { name, ref, onChange, onBlur } = register('email')
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    console.log(`${data} submit!!`)
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center m="20px">
        <h2>DropGo Admin</h2>
      </Center>
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

      <FormControl isInvalid={errors.name ? true : false} mb="5px">
        <FormLabel htmlFor="organization">組織名</FormLabel>
        <Input
          id="organization"
          placeholder="Enter your organization"
          {...register('organization', {
            required: '必須項目です',
          })}
        />
        <FormErrorMessage>{(errors.name && errors.email?.message) as string}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit" w={'100%'}>
        ログイン
      </Button>
    </form>
  )
}
