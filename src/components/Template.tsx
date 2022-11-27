import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { Header } from './headers/Header'
import { SideMenu } from './sideMenus/SideMenu'

export const Template = (props: { children?: ReactNode }) => {
  return (
    <>
      <Header />
      <Box flex="display">
        <SideMenu />
        {props.children}
      </Box>
    </>
  )
}
