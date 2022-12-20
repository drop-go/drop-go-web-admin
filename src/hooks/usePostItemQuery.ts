import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useRecoilRefresher_UNSTABLE } from 'recoil'
import { ItemPostRequest } from '../api/interface'
import { API_URL } from '../consts/env'
import { DEFAULT_LAT, DEFAULT_LNG } from '../consts/mapParams'
import { getItemsState } from '../globalStates/getItemsState'
import { useFile } from './useFile'

const center = {
  lat: DEFAULT_LAT,
  lng: DEFAULT_LNG,
}

export const usePostItemQuery = () => {
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
