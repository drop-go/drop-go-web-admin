import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE } from 'recoil'
import { EventPostRequest } from '../api/interface'
import { API_URL } from '../consts/env'
import { getEventsState } from '../globalStates/getEventsState'

const url = `${API_URL}/event`

export const usePostEventQuery = () => {
  const [cookies] = useCookies(['token'])
  const refresh = useRecoilRefresher_UNSTABLE(getEventsState(cookies.token))
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
    const header = {
      Authorization: `Bearer ${cookies.token}`,
    }
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

    axios
      .post(url, body, { headers: header })
      .then((res) => {
        console.log(res.data.message)
        refresh()
        navigate('/dashboard/events')
      })
      .catch((err) => {
        setError(`エラー: ${err}`)
      })
  }

  return {
    error,
    startDate,
    endDate,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    handleChangeStartDate,
    handleChangeEndDate,
    handleChangeFile,
    onSubmit,
  }
}
