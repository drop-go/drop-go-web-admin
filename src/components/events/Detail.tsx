import {
  Box,
  Center,
  Text,
  Image,
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SelectField,
} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useParams } from 'react-router-dom'
import { EventsGetResponse, ItemsGetResponse } from '../../api/interface'
import { API_URL } from '../../consts/env'

export const Detail = () => {
  const { eventId } = useParams()
  const [cookies] = useCookies(['token'])
  const [event, setEvent] = useState<EventsGetResponse>()
  const [items, setItems] = useState<ItemsGetResponse[]>([])
  const url = `${API_URL}/event/${eventId}`
  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${cookies.token}` } })
      .then((res) => {
        const event: EventsGetResponse = res.data
        setEvent(event)
      })
      .catch((err) => {
        console.log(err)
      })
    axios
      .get(url + '/item', { headers: { Authorization: `Bearer ${cookies.token}` } })
      .then((res) => {
        SelectField(res.data)
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
            <Box m="20px" w="50%">
              <Text fontSize="3xl">{event?.title}</Text>
              <Text fontSize="2xl">詳細</Text>
              <Text>{event?.description}</Text>
              <Image src={event?.imageUrl} h="200px" />
              <Text>公開設定</Text>
              <Text>{event?.scope}</Text>
              <Text>開始日</Text>
              <Text>{event?.startDate}</Text>
              <Text>終了日</Text>
              <Text>{event?.endDate}</Text>
            </Box>
            <Box m="20px" w="50%">
              <Text>ファイル一覧</Text>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>ファイル名</Th>
                      <Th>緯度・経度</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items.map((item, key) => (
                      <Tr key={key}>
                        <Td>{item.title}</Td>
                        <Td>
                          {item.coordinate.latitude}・{item.coordinate.latitude}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  )
}