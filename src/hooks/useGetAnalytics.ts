import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { selector, selectorFamily, useRecoilValue } from 'recoil'
import { API_URL } from '../consts/env'

export const useGetAnalytics = () => {
  const [cookies] = useCookies(['token'])
  const logsResult = useRecoilValue(logDownloadQuery(cookies.token))
  return { logsResult }
}

const logDownloadUrl = `${API_URL}/log/download`

const logDownloadQuery = selectorFamily<any, string>({
  key: 'logDownloadQuery',
  get: (token) => () => {
    // TODO: header関数実装による共通化
    const header = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get(logDownloadUrl, header)
  },
})
