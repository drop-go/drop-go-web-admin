import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { getEventState } from '../globalStates/getEventState'
import { getItemsState } from '../globalStates/getItemsState'

export const useGetEventDetailQuery = (eventId: string) => {
  const [cookies] = useCookies(['token'])
  const event = useRecoilValue(getEventState({ eventId: eventId, token: cookies.token }))
  const items = useRecoilValue(getItemsState({ eventId: eventId, token: cookies.token }))

  return { event, items }
}
