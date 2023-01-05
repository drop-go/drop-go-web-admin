import { CloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Td,
  Tr,
  useDisclosure,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Select,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import { GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'
import { ItemsGetResponse } from '../../../api/interface'
import { DEFAULT_LAT, DEFAULT_LNG, DEFAULT_ZOOM } from '../../../consts/mapParams'
import { useUpdateItemQuery } from '../../../hooks/useUpdateItemQuery'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}

const zoom = DEFAULT_ZOOM

export const File = (props: { item: ItemsGetResponse; key: number }) => {
  const { key, item } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    radius,
    latLng,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    handleChangeSlider,
    handleChangeFile,
    handleChangeMap,
    onSubmit,
  } = useUpdateItemQuery(item.id)

  return (
    <Tr key={key}>
      <Td>{item.title}</Td>
      <Td>
        <Button onClick={onOpen}>編集</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>
                <Flex>
                  <Text>アイテム編集</Text>
                  <Spacer />
                  <CloseIcon cursor="pointer" onClick={onClose} />
                </Flex>
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Flex p={'20px'} h={'85vh'} flexFlow={'column'} justifyContent={'space-between'}>
                    <Box h={'75vh'}>
                      <Flex h={'100%'}>
                        <Box w="48%">
                          <FormControl>
                            <FormLabel>公開ファイル名</FormLabel>
                            <Input
                              id="title"
                              type="text"
                              placeholder="ファイル名"
                              {...register('title', { required: '必須項目です' })}
                            />
                            <input type="file" onChange={handleChangeFile} />
                          </FormControl>
                          <FormControl h={'15%'}>
                            <FormLabel>公開設定</FormLabel>
                            <Select id="scope" {...register('scope')}>
                              <option value="public">公開</option>
                              <option value="private">非公開</option>
                            </Select>
                          </FormControl>
                          <FormControl h={'70%'}>
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
                        <Box w="48%">
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
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </Td>
    </Tr>
  )
}
