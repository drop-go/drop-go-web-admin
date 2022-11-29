import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Center, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { UserPostRequest } from '../api/interface'
import axios from 'axios'
import { API_URL } from '../consts/env'

const url = `${API_URL}/user`

export const SignUpForm = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    const { email, password, organization, organizationDescription } = data
    const body: UserPostRequest = {
      email: email,
      password: password,
      name: organization,
      description: organizationDescription,
      iconDataURI: '',
    }

    axios
      .post(url, body)
      .then((res) => {
        const token = res.data.token
        setCookie('token', token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setError(`エラー: ${err}`)
      })
  }

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
