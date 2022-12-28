import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useSignUpQuery } from '../hooks/useSignUpQuery'

export const SignUpForm = () => {
  const {
    error,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
  } = useSignUpQuery()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center m="40px auto" h="80px" w="80px">
        {/**
         * HACK:
         * ロゴアイコン共通コンポーネント化
         */}
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
      <FormControl>
        <FormLabel htmlFor="organizationDescription">組織紹介文</FormLabel>
        <Textarea
          h={'20vh'}
          id="organizationDescription"
          placeholder="Enter your organization "
          {...register('organizationDescription', {})}
        />
      </FormControl>
      <Button mt={4} colorScheme="brand" isLoading={isSubmitting} type="submit" w={'100%'}>
        サインアップ
      </Button>
    </form>
  )
}
