import { Box, Button, Center, Text } from '@chakra-ui/react'
import React from 'react'

export const New = () => {
  // TODO: 登録処理

  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Text fontSize="3xl" m="20px">
            イベント新規作成
          </Text>
          <form>
            <Button>作成</Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}
