import axios from 'axios'
import { useCookies } from 'react-cookie'
import { selectorFamily, useRecoilValue } from 'recoil'
import { API_URL } from '../consts/env'
import { createHeader } from '../utils'

export const useGetAnalytics = () => {
  const [cookies] = useCookies(['token'])
  const logsResult = useRecoilValue(logDownloadQuery(cookies.token)).data
  return { logsResult }
}

const logDownloadUrl = `${API_URL}/log/download`

const logDownloadQuery = selectorFamily<any, string>({
  key: 'logDownloadQuery',
  get: (token) => async () => {
    return await axios.get(logDownloadUrl, createHeader(token))
  },
})
