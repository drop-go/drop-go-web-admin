import React from 'react'
import { Box } from '@chakra-ui/react'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../consts/mapParams'
import { GoogleMap } from '@react-google-maps/api'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}
const zoom = DEFAULT_ZOOM

export const Map = () => {
  return (
    <Box bgColor="white" h="80vh" w="30vw">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={zoom}></GoogleMap>
    </Box>
  )
}
