import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { useDeleteItemQuery } from '../../../hooks/useDeleteItemQuery'

export const DeleteItem = (props: { itemId: string }) => {
  const { itemId } = props
  const { handleChangeDeleteItem } = useDeleteItemQuery()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        削除
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>アイテムの削除</ModalHeader>
            <ModalBody>本当に削除してよろしいですか？</ModalBody>
            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                onClick={async () => {
                  await handleChangeDeleteItem(itemId)
                  onClose()
                }}
              >
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
