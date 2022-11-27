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
import { List } from '../components/events/list'
import { Header } from '../components/headers/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'
import { Template } from '../components/Template'

/**
 * HACK:
 * ダッシュボードの枠（Header, SideMenu）を共通コンポーネント化
 */

export const Events = () => {
  return (
    <div>
      <Template>
        <List />
      </Template>
    </div>
  )
}
