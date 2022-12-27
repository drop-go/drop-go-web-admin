import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'

const url = `${API_URL}/event`

export const getEventsState = selectorFamily<any, string>({
  key: 'getEvents',
  get: (token) => async () => {
    return axios.get(url, createHeader(token))
  },
})
