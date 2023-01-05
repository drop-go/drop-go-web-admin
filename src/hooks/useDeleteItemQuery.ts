import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE } from 'recoil'
import { API_URL } from '../consts/env'
import { getItemsState } from '../globalStates/getItemsState'
import { createHeader } from '../utils'

export const useDeleteItemQuery = () => {
  const { eventId } = useParams()
  const [cookies] = useCookies(['token'])
  const refresh = useRecoilRefresher_UNSTABLE(getItemsState({ eventId: eventId || '', token: cookies.token }))
  const handleChangeDeleteItem = (itemId: string) => {
    const url = `${API_URL}/event/${eventId}/item/${itemId}`
    axios
      .delete(url, createHeader(cookies.token))
      .then(() => {
        refresh()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { handleChangeDeleteItem }
}
