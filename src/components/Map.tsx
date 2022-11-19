import React from 'react'
import { Box } from '@chakra-ui/react'
import { MAP_API_KEY } from '../consts/env'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../consts/mapParams'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}
const zoom = DEFAULT_ZOOM

export const Map = () => {
  return (
    <Box bgColor="white" h="80vh" w="30vw">
      <LoadScript googleMapsApiKey={MAP_API_KEY}>
        <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={zoom}></GoogleMap>
      </LoadScript>
    </Box>
  )
}
