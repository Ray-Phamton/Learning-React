import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App} from './App' 
import './App.css'

const root = createRoot(document.getElementById('root'))

// components must always be in PascalCase

root.render(
    <App/>
)
