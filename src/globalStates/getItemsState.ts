import axios from 'axios'
import { selectorFamily } from 'recoil'
import { API_URL } from '../consts/env'
import { authState } from './authState'

const url = `${API_URL}/event`

export const getItemsState = selectorFamily<any, string>({
  key: 'getFiles',
  // prettier-ignore
  get: (eventId) => async ({get}) => {
    // TODO: createHeader()
    return await axios.get(`${url}/${eventId}/item`, {headers: {Authorization: `Bearer ${get(authState)}`}})
  },
})
