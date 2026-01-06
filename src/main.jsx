import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbarmenu from './components/navbar/Navbarmenu.jsx'
import MainInfo from './components/information/stack/MainInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbarmenu />
    <MainInfo />
  </StrictMode>
)
