import { TableContainer, Table, Thead, Tr, Th, Tbody, Skeleton, Td } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import { AnalyticsTable } from '../analytics/AnalyticsTable'
import { ErrorBoundary } from '../ErrorBoundary'

export const TableData = () => {
  return (
    <TableContainer bgColor="white" h="100%" overflowY="unset">
      <Table w="95%" m="0 auto">
        <Thead position="sticky" zIndex="docked">
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
