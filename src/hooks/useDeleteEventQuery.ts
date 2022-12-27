import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'

export const useDeleteEvnetQuery = (eventId: string) => {
  const url = `${API_URL}/event/${eventId}`
  const navigate = useNavigate()
  const [cookies] = useCookies(['token'])
  const [error, setError] = useState('')
  const handleChangeDelete = () => {
    axios
      .delete(url, createHeader(cookies.token))
      .then((res) => navigate('/dashboard/events'))
      .catch((err) => setError(`エラー: ${err}`))
  }
  return { handleChangeDelete, error }
}
