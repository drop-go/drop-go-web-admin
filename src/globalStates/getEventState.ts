import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'
import { authState } from './authState'

export const getEventState = selectorFamily<any, string>({
  key: 'getEvent',
  // prettier-ignore
  get: (eventId) => async ({ get }) => {
    // TODO: createHeader()
    return await axios.get(`${url}/${eventId}`, { headers: { Authorization: `Bearer ${get(authState)}` } })
  },
})

const url = `${API_URL}/event`
