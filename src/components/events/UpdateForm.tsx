import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import ja from 'date-fns/locale/ja'
import DatePicker, { registerLocale } from 'react-datepicker'
import { useUpdateEventQuery } from '../../hooks/useUpdateEventQuery'

registerLocale('ja', ja)

// TODO: レイアウト調整
export const UpdateForm = () => {
  const { eventId } = useParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    onSubmit,
    startDate,
    endDate,
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeFile,
  } = useUpdateEventQuery(eventId || '')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>タイトル</FormLabel>
        <Input id="title" type="text" {...register('title', { required: '必須項目です' })} />
      </FormControl>
      <FormControl>
        <FormLabel>紹介文</FormLabel>
        <Textarea id="description" {...register('description', { required: '必須項目です' })} />
      </FormControl>
      <FormControl>
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
        <DatePicker
          selected={new Date(startDate)}
          onChange={handleChangeStartDate}
          locale="ja"
          dateFormat="yyyy/MM/dd"
        />
      </FormControl>
      <FormControl mb="16px">
        <FormLabel>開催期間（終了日）</FormLabel>
        <DatePicker selected={new Date(endDate)} onChange={handleChangeEndDate} locale="ja" dateFormat="yyyy/MM/dd" />
      </FormControl>
      <FormControl mb="32px">
        <FormLabel>サムネイル</FormLabel>
        <input type="file" onChange={handleChangeFile} />
      </FormControl>
      <Button type="submit" isLoading={isSubmitting} colorScheme="brand" px="24">
        更新
      </Button>
    </form>
  )
}
