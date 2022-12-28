import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { EventGetResponse, ItemsGetResponse } from '../api/interface'
import { getEventState } from '../globalStates/getEventState'
import { getItemsState } from '../globalStates/getItemsState'

export const useGetEventDetailQuery = (eventId: string) => {
  const [cookies] = useCookies(['token'])
  const event: EventGetResponse = useRecoilValue(getEventState({ eventId: eventId, token: cookies.token })).data
  const items: ItemsGetResponse[] = useRecoilValue(getItemsState({ eventId: eventId, token: cookies.token })).data

  return { event, items }
}
