import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'
import { theme } from './theme'
import { LoadScript } from '@react-google-maps/api'
import { MAP_API_KEY } from './consts/env'
import { App } from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <LoadScript googleMapsApiKey={MAP_API_KEY}>
            <App />
          </LoadScript>
        </ChakraProvider>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
