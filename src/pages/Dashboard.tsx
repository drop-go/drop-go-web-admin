import React from 'react'
import { Header } from '../components/headers/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'
import { Layout } from '../components/dashboards/Layout'
import { Box } from '@chakra-ui/react'

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
