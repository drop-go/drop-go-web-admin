import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Spacer, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'
import { CloseIcon } from '@chakra-ui/icons'
import { usePostEventQuery } from '../../hooks/usePostEventQuery'
import { useOnBack } from '../../hooks/useOnBack'

registerLocale('ja', ja)

export const New = () => {
  const {
    error,
    startDate,
    endDate,
    register,
    handleSubmit,
    formState: { isSubmitting },
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeFile,
    onSubmit,
  } = usePostEventQuery()
  const { onBack } = useOnBack()

  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="70vw" h="85vh" bg="white" m="auto" px="16px">
          <Flex>
            <Text fontSize="3xl" m="20px">
              イベント新規作成
            </Text>
            <Spacer />
            <Center pr="16px">
              <CloseIcon onClick={onBack} />
            </Center>
          </Flex>
          <span>{error}</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb="16px">
              <FormLabel>イベントタイトル</FormLabel>
              <Input
                id="title"
                type="text"
                placeholder="イベント名"
                {...register('title', { required: '必須項目です' })}
              />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>紹介文</FormLabel>
              <Textarea
                id="description"
                placeholder="紹介文"
                {...register('description', { required: '必須項目です' })}
              />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>イベント住所</FormLabel>
              <Input
                id="address"
                type="text"
                placeholder="東京都千代田区"
                {...register('address', { required: '必須項目です' })}
              />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>開催期間（開始日）</FormLabel>
              <DatePicker selected={startDate} onChange={handleChangeStartDate} locale="ja" dateFormat="yyyy/MM/dd" />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>開催期間（終了日）</FormLabel>
              <DatePicker selected={endDate} onChange={handleChangeEndDate} locale="ja" dateFormat="yyyy/MM/dd" />
            </FormControl>
            <FormControl mb="32px">
              <FormLabel>サムネイル</FormLabel>
              <input type="file" onChange={handleChangeFile} />
            </FormControl>
            <Button type="submit" isLoading={isSubmitting} colorScheme="brand" px="24">
              作成
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}
