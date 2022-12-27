import { useRecoilValue } from 'recoil'
import { getEventState } from '../globalStates/getEventState'

export const useGetEventQuery = (eventId: string) => {
  const event = useRecoilValue(getEventState(eventId))
  return { event }
}
