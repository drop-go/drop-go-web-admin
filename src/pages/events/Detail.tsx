import React, { Suspense } from 'react'
import { Template } from '../../components/Template'
import { Detail as EventDetail } from '../../components/events/Detail'
import {
  Box,
  Center,
  Flex,
  Skeleton,
  Text,
  Spacer,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
  Button,
} from '@chakra-ui/react'
import { ErrorBoundary } from '../../components/ErrorBoundary'
import { useParams } from 'react-router-dom'
import { CloseIcon } from '@chakra-ui/icons'
import { useOnBack } from '../../hooks/useOnBack'
import { Link } from '../../components/Link'

export const Detail = () => {
  return (
    <div>
      <Template>
        <Box bgColor="#EDF2F6" h="92vh" w="85vw">
          <Center w="100%" h="100%">
            <Box w="80vw" h="85vh" bg="white" m="auto">
              <ErrorBoundary fallback={<ErrorResult />}>
                <Suspense fallback={<Loading />}>
                  <EventDetail />
                </Suspense>
              </ErrorBoundary>
            </Box>
          </Center>
        </Box>
      </Template>
    </div>
  )
}

const Loading = () => {
  const { eventId } = useParams()
  const { onBack } = useOnBack()
  return (
    <>
      <Flex>
        <Text fontSize="3xl" m="20px">
          <Skeleton height="10px"></Skeleton>
        </Text>
        <Spacer />
        <Center pr="16px">
          <CloseIcon cursor="pointer" onClick={onBack} />
        </Center>
      </Flex>
      <Flex>
        <Box m="20px" w="50%">
          <Box mb="20px">
            <Text fontSize="2xl">詳細</Text>
            <Text>
              <Skeleton height="10px"></Skeleton>
            </Text>
          </Box>
          <Box mb="20px">
            <Text fontSize="2xl">サムネイル</Text>
            <Spinner m="50px" size="xl" />
          </Box>
          <Box mb="20px">
            <Text>公開設定</Text>
            <Text>
              <Skeleton height="10px"></Skeleton>
            </Text>
          </Box>
          <Box mb="20px">
            <Text fontSize="2xl">開催期間</Text>
            <Text>
              <Skeleton height="10px"></Skeleton>
            </Text>
          </Box>
          <Box mb="50px">
            <Link to={`/dashboard/events/${eventId}/update`} color="brand.200">
              イベントの編集
            </Link>
          </Box>
          <Box>
            <Button colorScheme="red">イベントを削除する</Button>
          </Box>
        </Box>
        <Box m="20px" w="50%">
          <Flex>
            <Text>ファイル一覧</Text>
            <Spacer />
            <Link to={`/dashboard/events/${eventId}/file/new`} color="brand.200">
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
                <Tr>
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
                </Tr>
                <Tr>
                  <Td>
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                  <Td>
                    <Skeleton height="10px"></Skeleton>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  )
}

const ErrorResult = () => {
  return <Text>データの取得に失敗しました。時間をおいて再度お試しください。</Text>
}
