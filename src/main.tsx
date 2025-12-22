import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { HooksApp } from './HooksApp.tsx'
import './index.css'
import { PokemonPage } from './03-examples/PokemonPage.tsx'
import { FocusScreen } from './04-useRef/FocusScreen.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusScreen></FocusScreen>
  </StrictMode>,
)
