import React, { useEffect, useState } from 'react'
import {
  Box,
  Center,
  Flex,
  Skeleton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../consts/env'
import { useCookies } from 'react-cookie'
import { EventsGetResponse } from '../../api/interface'

const url = `${API_URL}/event`
export const List = () => {
  const [events, setEvents] = useState<EventsGetResponse[]>([])
  const [cookies] = useCookies(['token'])
  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${cookies.token}` } })
      .then((res) => {
        const events: EventsGetResponse[] = res.data
        setEvents(events)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Flex>
            <Text fontSize="3xl" m="20px">
              イベント一覧
            </Text>
            <Spacer />
            <Center m="10px">
              <Link to="/dashboard/events/new">新規作成</Link>
            </Center>
          </Flex>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>イベント名</Th>
                  <Th>ステータス</Th>
                  <Th>サムネイル</Th>
                </Tr>
              </Thead>
              <Tbody>
                {events.map((event, key) => (
                  <Tr key={key}>
                    <Td m="5px">{event.title}</Td>
                    <Td m="5px">{event.scope}</Td>
                    <Td m="5px">
                      <img src="" />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </Box>
  )
}
