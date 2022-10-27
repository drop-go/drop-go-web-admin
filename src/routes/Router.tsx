import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Navigate replace to={'/dashboard'} />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
