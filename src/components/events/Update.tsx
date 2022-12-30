import { CloseIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useOnBack } from '../../hooks/useOnBack'
import { UpdateForm } from './UpdateForm'

export const Update = () => {
  const { onBack } = useOnBack()

  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Box m="20px">
            <Flex mb="20px">
              <Text fontSize="3xl">イベント編集</Text>
              <Spacer />
              <Center pr="16px">
                <CloseIcon cursor="pointer" onClick={onBack} />
              </Center>
            </Flex>
            <UpdateForm />
          </Box>
        </Box>
      </Center>
    </Box>
  )
}
