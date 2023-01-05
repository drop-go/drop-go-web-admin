import axios from 'axios'
import { selectorFamily } from 'recoil'
import { ItemGetResponse } from '../api/interface'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'

export const getItemState = selectorFamily<any, { eventId: string; itemId: string; token: string }>({
  key: 'getFile',
  // prettier-ignore
  get: ({eventId, itemId, token}) => async () => {
    const result = await axios.get(`${API_URL}/event/${eventId}/item/${itemId}`, createHeader(token))
    const item: ItemGetResponse = result.data
    return { item }
  },
})
