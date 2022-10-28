import React from 'react'
import { Header } from '../components/Header'
import { SideMenu } from '../components/sideMenus/SideMenu'
import { Layout } from '../components/dashboards/Layout'

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <SideMenu />
      <Layout />
    </div>
  )
}
