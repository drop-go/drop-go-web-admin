import { TableContainer, Table, Thead, Tr, Th, Tbody, Skeleton, Td } from '@chakra-ui/react'
import React from 'react'

export const TableData = () => {
  return (
    <TableContainer bgColor="white" h="100%">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ファイル名</Th>
            <Th>公開期限</Th>
            <Th>緯度</Th>
            <Th>経度</Th>
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
            <Td m="5px">
              <Skeleton height="10px"></Skeleton>
            </Td>
            <Td m="5px">
              <Skeleton height="10px"></Skeleton>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}
