import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { HooksApp } from './HooksApp.tsx'
import './index.css'
//import { ScrambleWordsUseReduce } from './05-useReducer/ScrambleWordsUseState.tsx'
import { ScrambleWords } from './05-useReducer/ScrambleWords.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrambleWords></ScrambleWords>
  </StrictMode>,
)
