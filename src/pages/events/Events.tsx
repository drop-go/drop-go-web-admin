import {
  Box,
  Button,
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
import React, { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { List } from '../../components/events/List'
import { Template } from '../../components/Template'

export const Events = () => {
  const navigate = useNavigate()
  const handleChangeJump = () => navigate('/dashboard/events/new')
  return (
    <div>
      <Template>
        <Box bgColor="#EDF2F6" h="92vh" w="85vw">
          <Center w="100%" h="100%">
            <Box w="80vw" h="85vh" bg="white" m="auto">
              <Flex h="10vh">
                <Text fontSize="3xl" m="20px">
                  イベント一覧
                </Text>
                <Spacer />
                <Center m="10px">
                  <Button colorScheme="brand" onClick={handleChangeJump}>
                    新規作成
                  </Button>
                </Center>
              </Flex>
              <TableContainer h="75vh" overflowY="unset">
                <Table variant="simple" w="100%">
                  <Thead>
                    <Tr>
                      <Th>イベント名</Th>
                      <Th>ステータス</Th>
                      <Th>サムネイル</Th>
                    </Tr>
                  </Thead>
                  <ErrorBoundary fallback={<ErrorResult />}>
                    <Suspense fallback={<Loading />}>
                      <List />
                    </Suspense>
                  </ErrorBoundary>
                </Table>
              </TableContainer>
            </Box>
          </Center>
        </Box>
      </Template>
    </div>
  )
}

const Loading = () => {
  return (
    <Tbody>
      <Tr>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
        <Td>
          <Skeleton height="10px"></Skeleton>
        </Td>
      </Tr>
    </Tbody>
  )
}

const ErrorResult = () => {
  return (
    <Tbody>
      <Tr>
        <Td colSpan={3}>データを取得できませんでした。時間をおいて再度お試しください。</Td>
      </Tr>
    </Tbody>
  )
}
