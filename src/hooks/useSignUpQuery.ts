import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { UserPostRequest } from '../api/interface'
import { API_URL } from '../consts/env'

const url = `${API_URL}/user`

export const useSignUpQuery = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const navigate = useNavigate()
  const onSubmit = (data: any) => {
    const { email, password, organization, organizationDescription } = data
    const body: UserPostRequest = {
      email: email,
      password: password,
      name: organization,
      description: organizationDescription,
      iconDataURI: '',
    }

    axios
      .post(url, body)
      .then((res) => {
        const token = res.data.token
        setCookie('token', token)
        navigate('/dashboard')
      })
      .catch((err) => {
        setError(`エラー: ${err}`)
      })
  }
  return { error, register, handleSubmit, formState: { errors, isSubmitting }, onSubmit }
}
