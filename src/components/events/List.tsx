import React from 'react'
import { Tr, Image, Tbody, Td } from '@chakra-ui/react'
import { Link } from '../../components/Link'
import { EventsGetResponse } from '../../api/interface'
import { useGetEventsQuery } from '../../hooks/useGetEventsQuery'

export const List = () => {
  const { events } = useGetEventsQuery()

  return (
    <Tbody>
      {events.length ? (
        events.map((event: EventsGetResponse, key: number) => (
          <Tr key={key} w="80vw">
            <Td>
              <Link to={`/dashboard/events/${event.id}`} display="block">
                {event.title}
              </Link>
            </Td>
            <Td>
              <Link to={`/dashboard/events/${event.id}`} display="block">
                {event.scope === 'public' ? '公開' : event.scope === 'private' ? '非公開' : '非表示'}
              </Link>
            </Td>
            <Td>
              <Link to={`/dashboard/events/${event.id}`} display="block">
                <Image src={event.imageUrl} height="100px" />
              </Link>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={3}>イベントが登録されていません。</Td>
        </Tr>
      )}
    </Tbody>
  )
}
