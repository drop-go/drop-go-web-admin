import axios from 'axios'
import { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil'
import { ItemPostRequest } from '../api/interface'
import { API_URL } from '../consts/env'
import { DEFAULT_LAT, DEFAULT_LNG } from '../consts/mapParams'
import { getItemsState } from '../globalStates/getItemsState'
import { getItemState } from '../globalStates/getItemState'
import { createHeader } from '../utils'
import { useFile } from './useFile'

export const useUpdateItemQuery = (itemId: string) => {
  const [cookies] = useCookies(['token'])
  const { eventId } = useParams()
  const { item } = useRecoilValue(getItemState({ eventId: eventId || '', itemId: itemId, token: cookies.token }))
  const [radius, setRadius] = useState(item.radius)
  const [latLng, setLatLng] = useState<{ lat: number; lng: number }>({
    lat: item.latitude,
    lng: item.longitude,
  })
  const { strFile, fileName, fileType, setFile } = useFile()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: item.title,
      scope: item.scope,
      description: item.description,
    },
  })
  const navigate = useNavigate()
  const refresh = useRecoilRefresher_UNSTABLE(getItemsState({ eventId: eventId || '', token: cookies.token }))
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
    const url = `${API_URL}/event/${eventId}/item/${itemId}`

    axios
      .put(url, body, createHeader(cookies.token))
      .then((res) => {
        navigate(`/dashboard/events/${eventId}`)
        refresh()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return {
    radius,
    latLng,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    handleChangeSlider,
    handleChangeFile,
    handleChangeMap,
    onSubmit,
  }
}
