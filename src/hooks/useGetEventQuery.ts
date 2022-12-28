import { useCookies } from 'react-cookie'
import { useRecoilValue } from 'recoil'
import { getEventState } from '../globalStates/getEventState'

export const useGetEventQuery = (eventId: string) => {
  const [cookies] = useCookies(['token'])
  const result = useRecoilValue(getEventState({ eventId: eventId, token: cookies.token }))
  const event = {
    title: result.data.title,
    description: result.data.description,
    address: result.data.address,
    imageUrl: result.data.imageDataURI,
    startDate: new Date(result.data.startDate).toLocaleDateString(),
    endDate: new Date(result.data.endDate).toLocaleDateString(),
  }
  return { event }
}
