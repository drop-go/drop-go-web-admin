import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { AuthGetRequest } from '../api/interface'
import { API_URL } from '../consts/env'

const url = `${API_URL}/auth`

export const useAuthQuery = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const login = (authParams: AuthGetRequest) => {
    axios
      .post(url, authParams)
      .then((res) => {
        const token = res.data.token
        setCookie('token', token)
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err)
        setError(`エラー: ${err.response.data.message}`)
      })
  }

  return { error, login }
}
