import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ItemPostRequest } from '../../../api/interface'
import { API_URL } from '../../../consts/env'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../../../consts/mapParams'
import { useFile } from '../../../hooks/useFile'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}

export const FileNewForm = () => {
  const zoom = DEFAULT_ZOOM
  const [cookies] = useCookies(['token'])
  const [radius, setRadius] = useState(30)
  const [latLng, setLatLng] = useState<{ lat: number; lng: number }>(center)
  const { strFile, fileName, fileType, error, setFile } = useFile()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { eventId } = useParams()
  const navigate = useNavigate()
  const handleChangeSlider = (radius: number) => setRadius(radius)
  const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files)
  const handleChangeMap = (e: any) => {
    const { lat, lng } = e.latLng
    setLatLng({
      lat: lat(),
      lng: lng(),
    })
  }
  const onSubmit = (data: any) => {
    const { title, scope, description } = data
    const header = {
      Authorization: `Bearer ${cookies.token}`,
    }
    const body: ItemPostRequest = {
      file: {
        fileName: fileName || '', // TODO: undefined除去
        dataURI: strFile || '', // TODO: undefined除去
        type: fileType || '', // TODO: undefined除去
      },
      latitude: String(latLng.lat),
      longitude: String(latLng.lng),
      scope: scope,
      description: description,
      title: title,
      radius: radius,
    }
    const url = `${API_URL}/event/${eventId}/item`

    axios
      .post(url, body, { headers: header })
      .then((res) => {
        console.log(res.data.message)
        navigate(`/dashboard/events/${eventId}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Box m="20px">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <FormLabel>公開ファイル名</FormLabel>
                <Input
                  id="title"
                  type="text"
                  placeholder="ファイル名"
                  {...register('title', { required: '必須項目です' })}
                />
              </FormControl>
              <FormControl>
                <input type="file" onChange={handleChangeFile} />
              </FormControl>
              <FormControl>
                <FormLabel>公開設定</FormLabel>
                <Select id="scope" {...register('scope')}>
                  <option value="public">公開</option>
                  <option value="private">非公開</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>詳細</FormLabel>
                {
                  // TODO: placeholder内容
                }
                <Textarea id="description" placeholder="" {...register('description', { required: '必須項目です' })} />
              </FormControl>
              <FormControl>
                <FormLabel>ダウンロード範囲</FormLabel>
                <Text>半径{radius}m</Text>
                <Slider aria-label="slider-ex-1" defaultValue={radius} onChange={handleChangeSlider}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormControl>
              <FormControl h="300px" w="90%">
                <FormLabel>配置座標</FormLabel>
                <Flex>
                  <Text>緯度: {latLng.lat}</Text>
                  <Text>経度: {latLng.lng}</Text>
                </Flex>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '100%' }}
                  center={center}
                  zoom={zoom}
                  onClick={handleChangeMap}
                >
                  <Marker position={latLng} />
                </GoogleMap>
              </FormControl>
              <Button mt={4} colorScheme="brand" isLoading={isSubmitting} type="submit" w={'100%'}>
                アップロード
              </Button>
            </form>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}
