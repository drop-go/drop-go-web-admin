import { useRecoilValue } from 'recoil'
import { getEventsState } from '../globalStates/getEventsState'

export const useGetEventsQuery = () => {
  const events = useRecoilValue(getEventsState)
  return { events }
}
