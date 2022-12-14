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
  Spacer,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../../../consts/mapParams'
import { usePostItemQuery } from '../../../hooks/usePostItemQuery'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}

const zoom = DEFAULT_ZOOM

export const FileNewForm = () => {
  const {
    radius,
    latLng,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    handleChangeSlider,
    handleChangeFile,
    handleChangeMap,
    handleChangeLink,
    onSubmit,
    itemType,
    setItemType,
  } = usePostItemQuery()
  return (
    <Box bgColor="#EDF2F6" h="92vh" w="85vw">
      <Center w="100%" h="100%">
        <Box w="80vw" h="85vh" bg="white" m="auto">
          <Box h={'100%'}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex p={'20px'} h={'85vh'} flexFlow={'column'} justifyContent={'space-between'}>
                <Box h={'75vh'}>
                  <Flex h={'100%'}>
                    {/* 左部分 */}
                    <Box w={'48%'}>
                      <FormControl h={'15%'}>
                        <FormLabel>タイトル</FormLabel>
                        <Input
                          id="title"
                          type="text"
                          placeholder="タイトル"
                          {...register('title', { required: '必須項目です' })}
                        />
                      </FormControl>
                      <FormControl h="15%">
                        <Flex mb="10px">
                          <Button
                            colorScheme="brand"
                            variant={itemType === 'file' ? 'solid' : 'outline'}
                            onClick={() => setItemType('file')}
                          >
                            File
                          </Button>
                          <Button
                            colorScheme="brand"
                            variant={itemType === 'link' ? 'solid' : 'outline'}
                            onClick={() => setItemType('link')}
                          >
                            Link
                          </Button>
                        </Flex>
                        {itemType === 'file' ? (
                          <input type="file" onChange={handleChangeFile} />
                        ) : (
                          <Input type="text" onChange={handleChangeLink} />
                        )}
                      </FormControl>
                      <FormControl h={'15%'}>
                        <FormLabel>公開設定</FormLabel>
                        <Select id="scope" {...register('scope')}>
                          <option value="public">公開</option>
                          <option value="private">非公開</option>
                        </Select>
                      </FormControl>
                      <FormControl h={'55%'}>
                        <FormLabel>詳細</FormLabel>
                        {
                          // TODO: placeholder内容
                        }
                        <Textarea
                          id="description"
                          h={'calc(100% - 2rem)'}
                          resize={'none'}
                          placeholder=""
                          {...register('description', { required: '必須項目です' })}
                        />
                      </FormControl>
                    </Box>
                    <Spacer />
                    {/* 右部分 */}
                    <Box w={'48%'}>
                      <FormControl h={'15%'}>
                        <FormLabel>ダウンロード範囲</FormLabel>
                        <Text>半径{radius}m</Text>
                        <Slider aria-label="slider-ex-1" defaultValue={radius} onChange={handleChangeSlider}>
                          <SliderTrack>
                            <SliderFilledTrack />
                          </SliderTrack>
                          <SliderThumb />
                        </Slider>
                      </FormControl>
                      <FormControl h={'calc(85% - 3.5rem)'} w="100%">
                        <FormLabel>配置座標</FormLabel>
                        <Flex>
                          <Text mr={'1rem'}>緯度: {latLng.lat}</Text>
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
                    </Box>
                  </Flex>
                </Box>
                <Button mt={4} colorScheme="brand" isLoading={isSubmitting} type="submit" w={'100%'}>
                  アップロード
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Center>
    </Box>
  )
}
