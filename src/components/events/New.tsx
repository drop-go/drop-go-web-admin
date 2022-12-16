import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Spacer, Text, Textarea } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'
import { EventPostRequest } from '../../api/interface'
import { API_URL } from '../../consts/env'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'
import { createHeader } from '../../utils'

registerLocale('ja', ja)
const url = `${API_URL}/event`

export const New = () => {
  const [cookies] = useCookies(['token'])
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [file, setFile] = useState<string>()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const handleChangeStartDate = (date: Date) => setStartDate(date)
  const handleChangeEndDate = (date: Date) => setEndDate(date)
  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader()
    fileReader.onload = function () {
      const result = this.result
      if (typeof result !== 'string') return console.log('error size')
      setFile(result)
    }
    const files = e.target.files
    if (files === null) return
    if (files[0].size > 1024 * 1024 * 5) return
    fileReader.readAsDataURL(files[0])
  }
  const onSubmit = (data: any) => {
    const { title, description, address } = data
    const header = createHeader(cookies.token)
    const body: EventPostRequest = {
      address: address,
      endDate: endDate.getTime(),
      scope: 'public', // TODO: 固定値をはずす
      title: title,
      description: description,
      startDate: startDate.getTime(),
    }
    if (file !== '') {
      body.imageDataURI = file
    }
    if (startDate > endDate) {
      setError('不正な日時指定')
      return
    }
    // TODO: 登録処理
    axios
      .post(url, body, header)
      .then((res) => {
        console.log(res.data.message)
        navigate('/dashboard/events')
      })
      .catch((err) => {
        setError(`エラー: ${err}`)
      })
  }

  const onBack = () => navigate(-1)

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
              {
                // TODO: placeholder内容
              }
              <Textarea
                id="description"
                placeholder="紹介文"
                {...register('description', { required: '必須項目です' })}
              />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>イベント住所</FormLabel>
              {
                // TODO: placeholder内容
              }
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
