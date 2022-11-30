import { Box, Button, Center, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'

registerLocale('ja', ja)

export const New = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const handleChangeStartDate = (date: Date) => setStartDate(date)
  const handleChangeEndDate = (date: Date) => setEndDate(date)
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
            <FormControl>
              <FormLabel>開催期間（開始日）</FormLabel>
              <DatePicker selected={startDate} onChange={handleChangeStartDate} locale="ja" />
            </FormControl>
            <FormControl>
              <FormLabel>開催期間（終了日）</FormLabel>
              <DatePicker selected={endDate} onChange={handleChangeEndDate} locale="ja" />
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
