import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'

export const getEventState = selectorFamily<any, { eventId: string; token: string }>({
  key: 'getEvent',
  // prettier-ignore
  get: ({eventId, token}) => async () => {
    // TODO: createHeader()
    return await axios.get(`${url}/${eventId}`, { headers: { Authorization: `Bearer ${token}` } })
  },
})

const url = `${API_URL}/event`
