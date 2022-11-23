import React from 'react'
import { Header } from '../components/headers/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'
import { Layout } from '../components/dashboards/Layout'
import { Box } from '@chakra-ui/react'

/**
 * HACK:
 * ダッシュボードの枠（Header, SideMenu）を共通コンポーネント化
 */
export const Dashboard = () => {
  return (
    <div>
      <Header />
      <Box display="flex">
        <SideMenu />
        <Layout />
      </Box>
    </div>
  )
}
