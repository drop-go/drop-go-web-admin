import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'

const url = `${API_URL}/event`

export const getItemsState = selectorFamily<any, { eventId: string; token: string }>({
  key: 'getFiles',
  // prettier-ignore
  get: ({eventId, token}) => async () => {
    // TODO: createHeader()
    return await axios.get(`${url}/${eventId}/item`, {headers: {Authorization: `Bearer ${token}`}})
  },
})
