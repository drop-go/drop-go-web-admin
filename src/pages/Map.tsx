import React from 'react'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../consts/mapParams'
import { GoogleMap } from '@react-google-maps/api'
import { Header } from '../components/headers/Header'
import { Box } from '@chakra-ui/react'
import { SideMenu } from '../components/sideMenus/SideMenu'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}
const zoom = DEFAULT_ZOOM

export const Map = () => {
  return (
    <div>
      <Header />
      <Box display="flex">
        <SideMenu />
        <GoogleMap mapContainerStyle={{ width: '85vw', height: '92vh' }} center={center} zoom={zoom}></GoogleMap>
      </Box>
    </div>
  )
}
