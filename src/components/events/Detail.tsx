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
import { File } from './files/File'

export const Detail = () => {
  const { eventId } = useParams()
  const { event, items } = useGetEventDetailQuery(eventId || '')
  const { handleChangeDelete } = useDeleteEvnetQuery(eventId || '')
  const { onBack } = useOnBack()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex h="10vh">
        <Text fontSize="3xl" m="20px">
          {event?.title}
        </Text>
        <Spacer />
        <Center pr="16px">
          <CloseIcon cursor="pointer" onClick={onBack} />
        </Center>
      </Flex>
      <Flex h="75vh">
        <Box m="20px" w="50%" h="10vh">
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
        <Box m="20px" w="50%" h="65vh">
          <Flex mb="20px" h="3vh">
            <Text fontSize="2xl">ファイル一覧</Text>
            <Spacer />
            <Link to={`/dashboard/events/${eventId}/file/new`} color="brand.200">
              アイテム新規登録
            </Link>
          </Flex>
          <TableContainer h="62vh" overflowY="unset">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>アイテム名</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {items.map((item, key) => (
                  <File item={item} key={key} />
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
