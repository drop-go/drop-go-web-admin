import React from 'react'
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

export const List = () => {
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
                <Tr>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                </Tr>
                <Tr>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td m="5px">
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </Box>
  )
}
