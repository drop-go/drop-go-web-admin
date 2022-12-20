import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { getEventState } from '../globalStates/getEventState'

export const useGetEventQuery = (eventId: string) => {
  const [cookies] = useCookies(['token'])
  const event = useRecoilValue(getEventState({ eventId: eventId, token: cookies.token }))
  return { event }
}
