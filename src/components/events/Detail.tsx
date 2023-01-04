import { CloseIcon } from '@chakra-ui/icons'
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
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useDeleteEvnetQuery } from '../../hooks/useDeleteEventQuery'
import { useGetEventDetailQuery } from '../../hooks/useGetEventDetailQuery'
import { useOnBack } from '../../hooks/useOnBack'
import { showScope, unixToDate } from '../../utils'
import { Link } from '../Link'

export const Detail = () => {
  const { eventId } = useParams()
  const { event, items } = useGetEventDetailQuery(eventId || '')
  const { handleChangeDelete } = useDeleteEvnetQuery(eventId || '')
  const { onBack } = useOnBack()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex>
        <Text fontSize="3xl" m="20px">
          {event?.title}
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
            <Text>{event?.description}</Text>
          </Box>
          <Box mb="20px">
            <Text fontSize="2xl">サムネイル</Text>
            <Image src={event?.imageUrl} h="200px" />
          </Box>
          <Box mb="20px">
            <Text fontSize="2xl">公開設定</Text>
            <Text>{showScope(event?.scope)}</Text>
          </Box>
          <Box mb="20px">
            <Text fontSize="2xl">開催期間</Text>
            <Text>
              {unixToDate(event?.startDate)}~{unixToDate(event?.endDate)}
            </Text>
          </Box>
          <Box mb="50px">
            <Link to={`/dashboard/events/${eventId}/update`} color="brand.200">
              イベントの編集
            </Link>
          </Box>
          <Box>
            <Button colorScheme="red" onClick={onOpen}>
              イベントを削除する
            </Button>
          </Box>
        </Box>
        <Box m="20px" w="50%">
          <Flex mb="20px">
            <Text fontSize="2xl">ファイル一覧</Text>
            <Spacer />
            <Link to={`/dashboard/events/${eventId}/file/new`} color="brand.200">
              ファイル新規登録
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>イベントの削除</ModalHeader>
            <ModalCloseButton />
            <ModalBody>本当に削除してよろしいですか？</ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={handleChangeDelete}>
                削除
              </Button>
              <Button variant="ghost" onClick={onClose}>
                戻る
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
