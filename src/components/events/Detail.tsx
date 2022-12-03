import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../consts/env'

export const Detail = () => {
  const { eventId } = useParams()
  const [cookies] = useCookies(['token'])
  const url = `${API_URL}/event/${eventId}`
  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${cookies.token}` } })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <Box></Box>
}
