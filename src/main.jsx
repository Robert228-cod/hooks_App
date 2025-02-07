import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp.jsx'
//import { CounterApp } from './01-useState/CounterApp.jsx'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import { SimpleFrom } from './02-useEffect/simpleForm.jsx'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <MultipleCustomHooks />
  //</StrictMode>,
)
