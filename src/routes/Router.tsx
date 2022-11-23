import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { SignUp } from '../pages/SignUp'
import { Map } from '../pages/Map'
import { useCookies } from 'react-cookie'
import { Events } from '../pages/Events'
import { NewEvent } from '../pages/NewEvent'

export const Router = () => {
  const [cookies] = useCookies(['token'])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate replace to={'/dashboard'} />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/new'} element={<SignUp />} />
        <Route
          path={'/dashboard/*'}
          element={
            cookies.token ? (
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path={'/map'} element={<Map />} />
                <Route
                  path={'/events/*'}
                  element={
                    <Routes>
                      <Route index element={<Events />} />
                      <Route path={'/new'} element={<NewEvent />} />
                    </Routes>
                  }
                />
              </Routes>
            ) : (
              <Navigate replace to={'/login'} />
            )
          }
        />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
