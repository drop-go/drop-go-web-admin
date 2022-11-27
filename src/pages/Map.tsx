import React from 'react'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../consts/mapParams'
import { GoogleMap } from '@react-google-maps/api'
import { Template } from '../components/Template'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}
const zoom = DEFAULT_ZOOM

/**
 * HACK:
 * ダッシュボードの枠（Header, SideMenu）を共通コンポーネント化
 */
export const Map = () => {
  return (
    <div>
      <Template>
        <GoogleMap mapContainerStyle={{ width: '85vw', height: '92vh' }} center={center} zoom={zoom}></GoogleMap>
      </Template>
    </div>
  )
}
