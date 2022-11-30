import { Box, Button, Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const onSubmit = (data: any) => {
    const { title } = data
    const body = {}
    // TODO: 登録処理
  }

  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Text fontSize="3xl" m="20px">
            イベント新規作成
          </Text>
          <form>
            <FormControl>
              <FormLabel>イベントタイトル</FormLabel>
              <Input
                id="title"
                type="text"
                placeholder="イベント名"
                {...register('title', { required: '必須項目です' })}
              />
            </FormControl>
            <FormControl>
              <FormLabel>紹介文</FormLabel>
            </FormControl>
            <FormControl>
              <FormLabel>イベント住所</FormLabel>
            </FormControl>
            <Button type="submit" isLoading={isSubmitting}>
              作成
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}
