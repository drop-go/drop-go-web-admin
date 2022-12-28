import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { EventsGetResponse } from '../api/interface'
import { getEventsState } from '../globalStates/getEventsState'

export const useGetEventsQuery = () => {
  const [cookies] = useCookies(['token'])
  const events: EventsGetResponse[] = useRecoilValue(getEventsState(cookies.token)).data
  return { events }
}
