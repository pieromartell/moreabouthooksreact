import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HooksApp } from './hooksapp'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HooksApp></HooksApp>
  </StrictMode>,
)
