import { Tbody, Td, Tr } from '@chakra-ui/table'
import React from 'react'
import { LogDownloadGetResponse } from '../../api/interface'
import { useGetAnalytics } from '../../hooks/useGetAnalytics'

export const AnalyticsTable = () => {
  const { logsResult } = useGetAnalytics()
  return (
    <Tbody>
      {logsResult.length ? (
        logsResult.data.map((res: LogDownloadGetResponse, key: number) => (
          <Tr key={key}>
            <Td>{res.itemId}</Td>
            <Td>{res.eventId}</Td>
            <Td>{res.createdAt}</Td>
            <Td>{res.ip}</Td>
            <Td>{res.userAgent}</Td>
            <Td>{res.id}</Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={6}>ダウンロード履歴がありません。</Td>
        </Tr>
      )}
    </Tbody>
  )
}
