import { Box, Center, Skeleton, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import { ErrorBoundary } from '../ErrorBoundary'
import { AnalyticsTable } from './AnalyticsTable'

export const Detail = () => {
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Text fontSize="3xl" m="20px">
            ダウンロードログ
          </Text>
          <TableContainer>
            <Table w="95%" m="0 auto">
              <Thead>
                <Tr>
                  <Th>アイテムID</Th>
                  <Th>イベントID</Th>
                  <Th>ダウンロード日時</Th>
                  <Th>IPアドレス</Th>
                  <Th>ユーザエージェント</Th>
                  <Th>ID</Th>
                </Tr>
              </Thead>
              <ErrorBoundary fallback={<ErrorResult />}>
                <Suspense fallback={<Loading />}>
                  <AnalyticsTable />
                </Suspense>
              </ErrorBoundary>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </Box>
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
        <Td colSpan={6}>データを取得できませんでした。時間をおいて再度お試しください。</Td>
      </Tr>
    </Tbody>
  )
}
