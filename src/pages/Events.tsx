import {
  Box,
  Center,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Flex,
  Spacer,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/headers/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'

export const Events = () => {
  return (
    <div>
      <Header />
      <Box display="flex">
        <SideMenu />
        <Box bgColor="#EDF2F6" h="92vh" w="85vw">
          <Center w="100%" h="100%">
            <Box w="80vw" h="85vh" bg="white" m="auto">
              <Flex>
                <Text fontSize="3xl" m="20px">
                  イベント一覧
                </Text>
                <Spacer />
                <Center m="10px">
                  <Link to="/dashboard/events/new">新規作成</Link>
                </Center>
              </Flex>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>イベント名</Th>
                      <Th>期間</Th>
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
                    </Tr>
                    <Tr>
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
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Center>
        </Box>
      </Box>
    </div>
  )
}
