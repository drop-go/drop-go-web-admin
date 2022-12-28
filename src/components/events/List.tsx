import React from 'react'
import { Tr, Image, Tbody, Td } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { EventsGetResponse } from '../../api/interface'
import { useGetEventsQuery } from '../../hooks/useGetEventsQuery'

export const List = () => {
  const { events } = useGetEventsQuery()
  return (
    <Tbody>
      {events.length ? (
        events.map((event: EventsGetResponse, key: number) => (
          <Tr key={key}>
            <Link to={`/dashboard/events/${event.id}`}>
              <Td m="5px">{event.title}</Td>
              <Td m="5px">{event.scope}</Td>
              <Td m="5px">
                <Image src={event.imageUrl} height="100px" />
              </Td>
            </Link>
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
