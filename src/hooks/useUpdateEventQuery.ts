import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { EventPutRequest } from '../api/interface'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'
import { useGetEventQuery } from './useGetEventQuery'

export const useUpdateEventQuery = (eventId: string) => {
  const url = `${API_URL}/event/${eventId}`
  const [cookies] = useCookies(['token'])
  const navigate = useNavigate()
  const { event } = useGetEventQuery(eventId || '')
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState(0)
  const [file, setFile] = useState<string>()
  const [error, setError] = useState('')
  const handleChangeStartDate = (date: Date) => setStartDate(date.getTime())
  const handleChangeEndDate = (date: Date) => setEndDate(date.getTime())
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
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      title: event.title,
      description: event.description,
      address: event.address,
      scope: event.scope,
    },
  })
  const onSubmit = (data: any) => {
    const { address, description, title, scope } = data
    const body: EventPutRequest = {
      title: title,
      address: address,
      description: description,
      scope: scope,
      startDate: startDate,
      endDate: endDate,
    }
    if (file !== '') body.imageDataURI = file
    if (startDate > endDate) {
      setError('不正な日時指定')
      return
    }

    axios
      .put(url, body, createHeader(cookies.token))
      .then(() => navigate('/dashboard/events'))
      .catch((err) => {
        setError(`エラー: ${err}`)
      })
  }

  useEffect(() => {
    setStartDate(new Date(event.startDate).getTime())
    setEndDate(new Date(event.endDate).getTime())
    setFile(event.imageUrl)
  }, [])

  return {
    register,
    handleSubmit,
    formState: { isSubmitting },
    onSubmit,
    startDate,
    endDate,
    error,
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeFile,
  }
}
