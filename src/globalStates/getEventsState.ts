import axios from 'axios'
import { selector } from 'recoil'
import { API_URL } from '../consts/env'
import { authState } from './authState'

const url = `${API_URL}/event`

export const getEventsState = selector({
  key: 'getEvents',
  get: async ({ get }) => {
    // TODO: createHeader()
    return axios.get(url, { headers: { Authorization: `Bearer ${get(authState)}` } })
  },
})
