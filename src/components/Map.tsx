import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Box } from '@chakra-ui/react'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM, MAP_API_KEY } from '../consts/env'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}
const zoom = DEFAULT_ZOOM

export const Map = () => {
  return (
    <Box bgColor="white" h="80vh" w="30vw">
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
    </Box>
  )
}
