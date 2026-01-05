import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbarmenu from './components/navbar/Navbarmenu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbarmenu />
    <App />
  </StrictMode>
)
