import {
  Box,
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
  Spacer,
  Button,
} from '@chakra-ui/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetEventDetailQuery } from '../../hooks/useGetEventDetailQuery'
import { unixToDate } from '../../utils'

export const Detail = () => {
  const { eventId } = useParams()
  const { event, items } = useGetEventDetailQuery(eventId || '')

  return (
    <>
      <Text fontSize="3xl" m="20px">
        {event?.title}
      </Text>
      <Flex>
        <Box m="20px" w="50%">
          <Text fontSize="2xl">詳細</Text>
          <Text>{event?.description}</Text>
          <Image src={event?.imageUrl} h="200px" />
          <Text>公開設定</Text>
          <Text>{event?.scope}</Text>
          <Text>開始日</Text>
          <Text>{unixToDate(event?.startDate)}</Text>
          <Text>終了日</Text>
          <Text>{unixToDate(event?.endDate)}</Text>
        </Box>
        <Box m="20px" w="50%">
          <Flex>
            <Text>ファイル一覧</Text>
            <Spacer />
            <Link to={`/dashboard/events/${eventId}/update`}>
              <Button colorScheme="brand">イベントの編集</Button>
            </Link>
            <Link to={`/dashboard/events/${eventId}/file/new`}>
              <Text>ファイル新規登録</Text>
            </Link>
          </Flex>
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
                      {item.latitude}・{item.longitude}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  )
}
