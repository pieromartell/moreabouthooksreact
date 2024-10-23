import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './hooksapp'
import './index.css'
import { CounterwithCustomHooks } from './01-useState/CounterwithCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CounterwithCustomHooks></CounterwithCustomHooks>
  </StrictMode>,
)
