import React from 'react'
import { Box, Center, Img, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

export const NotFound = () => {
  return (
    <div>
      <Center mt="50px">
        <Flex justifyContent="space-between">
          <Box w="50%">
            <Text fontSize="6xl" fontWeight="bold" align="center">
              404
            </Text>
            <Text fontSize="3xl" fontWeight="bold" align="center">
              Page Not Found
            </Text>
            <Text align="center">
              ページが見つかりません。
              <br />
              URLが間違っているか存在しません。
            </Text>
            <Flex h={100} justify="center" align="center">
              <Link to="/dashboard">
                <ChakraLink color="#fff" bgColor="brand.500" py="8px" px="24px" rounded="8px">
                  トップに戻る
                </ChakraLink>
              </Link>
            </Flex>
          </Box>
          <Box w="50%">
            <Center h="100%" w="100%">
              <Img src={`${process.env.PUBLIC_URL}/404_kuromi.png`} alt="kuromi" width="50%" />
            </Center>
          </Box>
        </Flex>
      </Center>
    </div>
  )
}
