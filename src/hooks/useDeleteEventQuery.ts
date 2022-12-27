import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router'
import { useRecoilRefresher_UNSTABLE } from 'recoil'
import { API_URL } from '../consts/env'
import { getEventsState } from '../globalStates/getEventsState'
import { createHeader } from '../utils'

export const useDeleteEvnetQuery = (eventId: string) => {
  const url = `${API_URL}/event/${eventId}`
  const navigate = useNavigate()
  const [cookies] = useCookies(['token'])
  const refresh = useRecoilRefresher_UNSTABLE(getEventsState(cookies.token))
  const [error, setError] = useState('')
  const handleChangeDelete = () => {
    axios
      .delete(url, createHeader(cookies.token))
      .then(() => {
        refresh()
        navigate('/dashboard/events')
      })
      .catch((err) => setError(`エラー: ${err}`))
  }
  return { handleChangeDelete, error }
}
