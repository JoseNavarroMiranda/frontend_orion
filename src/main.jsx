import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbarmenu from './components/navbar/Navbarmenu.jsx'
import MainInfo from './components/information/stack/MainInfo.jsx'
import MiddleInfo from './components/information/stack/MiddleInfo.jsx'
import Footer from './components/footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbarmenu />
    <MainInfo />
    <MiddleInfo />
    <Footer />
  </StrictMode>
)
