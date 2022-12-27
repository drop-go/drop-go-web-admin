import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetEventQuery } from '../../hooks/useGetEventQuery'
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import ja from 'date-fns/locale/ja'
import DatePicker, { registerLocale } from 'react-datepicker'

registerLocale('ja', ja)

/**
 * TODO:
 * - Data fetch
 * - データ表示
 * - データ更新
 * - レイアウト調整
 */
export const UpdateForm = () => {
  const { eventId } = useParams()
  const { event } = useGetEventQuery(eventId || '')
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()
  const onSubmit = () => {
    return
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>タイトル</FormLabel>
        <Input id="title" type="text" value={event.title} {...register('title', { required: '必須項目です' })} />
      </FormControl>

      <FormControl>
        <FormLabel>紹介文</FormLabel>
        <Textarea
          id="description"
          value={event.description}
          {...register('description', { required: '必須項目です' })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>イベント住所</FormLabel>
        <Input
          id="address"
          type="text"
          value={event.address}
          placeholder="東京都千代田区"
          {...register('address', { required: '必須項目です' })}
        />
      </FormControl>
      <FormControl mb="16px">
        <FormLabel>開催期間（開始日）</FormLabel>
        <DatePicker
          selected={new Date()}
          onChange={() => {
            return
          }}
          locale="ja"
          value={event.startDate}
          dateFormat="yyyy/MM/dd"
        />
      </FormControl>
      <FormControl mb="16px">
        <FormLabel>開催期間（終了日）</FormLabel>
        <DatePicker
          selected={new Date()}
          onChange={() => {
            return
          }}
          locale="ja"
          value={event.endDate}
          dateFormat="yyyy/MM/dd"
        />
      </FormControl>
      <FormControl mb="32px">
        <FormLabel>サムネイル</FormLabel>
        <input
          type="file"
          onChange={() => {
            return
          }}
        />
      </FormControl>
      <Button type="submit" isLoading={isSubmitting} colorScheme="brand" px="24">
        作成
      </Button>
    </form>
  )
}
