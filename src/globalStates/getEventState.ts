import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'

export const getEventState = selectorFamily<any, { eventId: string; token: string }>({
  key: 'getEvent',
  // prettier-ignore
  get: ({eventId, token}) => async () => {
    return await axios.get(`${url}/${eventId}`, createHeader(token))
  },
})

const url = `${API_URL}/event`
