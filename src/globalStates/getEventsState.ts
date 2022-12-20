import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'

const url = `${API_URL}/event`

export const getEventsState = selectorFamily<any, string>({
  key: 'getEvents',
  get: (token) => async () => {
    // TODO: createHeader()
    return axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
  },
})
