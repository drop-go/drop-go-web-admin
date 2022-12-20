import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useSetRecoilState } from 'recoil'
import { authState } from './globalStates/authState'
import { Router } from './routes/Router'

export const App = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const setAuth = useSetRecoilState(authState)
  useEffect(() => {
    setAuth(cookies.token)
  }, [])
  return (
    <>
      <Router />
    </>
  )
}
