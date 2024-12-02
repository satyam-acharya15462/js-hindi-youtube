import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Satyam from './satyam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <>
    <Satyam />
    <App />
    </>
  </StrictMode>,
)
