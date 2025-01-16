import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './hooksapp'
import './index.css'
import { CounterwithCustomHooks } from './01-useState/CounterwithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <CounterwithCustomHooks></CounterwithCustomHooks> */}
   {/* <FormWithCustomHook></FormWithCustomHook> */}
   <MultipleCustomHooks></MultipleCustomHooks>
  </StrictMode>,

)
