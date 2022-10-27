import React from 'react'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

/*
TODO:
  - style調整
  - ログイン成功後の画面遷移
*/
export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { name, ref, onChange, onBlur } = register('email')
  const onSubmit = (data: any) => {
    console.log(`${data} submit!!`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="email">メールアドレス</FormLabel>
        <Input
          id="email"
          placeholder="example@example.com"
          {...register('email', {
            required: '必須項目です',
          })}
        />
        <FormErrorMessage>{(errors.name && errors.email?.message) as string}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name ? true : false}>
        <FormLabel htmlFor="password">パスワード</FormLabel>
        <Input
          id="password"
          placeholder="Enter your password"
          {...register('password', {
            required: '必須項目です',
          })}
        />
        <FormErrorMessage>{(errors.name && errors.email?.message) as string}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        ログイン
      </Button>
    </form>
  )
}
