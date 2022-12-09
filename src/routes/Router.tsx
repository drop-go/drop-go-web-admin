import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard, Login, SignUp, Map, Events, EventNew, EventDetail, NotFound } from '../pages'
import { useCookies } from 'react-cookie'
import { FileNew } from '../pages/events/files/FileNew'
import { Analytics } from '../pages/Analytics'

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
                      <Route path={'/new'} element={<EventNew />} />
                      <Route
                        path={'/:eventId/*'}
                        element={
                          <Routes>
                            <Route index element={<EventDetail />} />
                            <Route
                              path={'/file/*'}
                              element={
                                <Routes>
                                  <Route path={'/new'} element={<FileNew />} />
                                </Routes>
                              }
                            />
                          </Routes>
                        }
                      />
                      <Route path={'*'} element={<NotFound />} />
                    </Routes>
                  }
                />
                <Route path={'/analytics'} element={<Analytics />} />
                <Route path={'*'} element={<NotFound />} />
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
