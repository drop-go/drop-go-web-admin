import { useRecoilValue } from 'recoil'
import { getEventState } from '../globalStates/getEventState'
import { getItemsState } from '../globalStates/getItemsState'

export const useGetEventDetailQuery = (eventId: string) => {
  const event = useRecoilValue(getEventState(eventId))
  const items = useRecoilValue(getItemsState(eventId))

  return { event, items }
}
