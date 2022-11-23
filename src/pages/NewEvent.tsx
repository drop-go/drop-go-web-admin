import React from 'react'
import { Box } from '@chakra-ui/react'
import { Header } from '../components/headers/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'

/**
 * HACK:
 * ダッシュボードの枠（Header, SideMenu）を共通コンポーネント化
 */
export const NewEvent = () => {
  return (
    <div>
      <Header />
      <Box display="flex">
        <SideMenu />
        <Box bgColor="#EDF2F6" h="92vh" w="85vw"></Box>
      </Box>
    </div>
  )
}
