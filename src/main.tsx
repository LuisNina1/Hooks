import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import { HooksApp } from './HooksApp.tsx'
import './index.css'
// import { InstagromApp } from './07-useOptimistic/InstragromApp'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
import { Toaster } from 'sonner'
//import { ScrambleWordsUseReduce } from './05-useReducer/ScrambleWordsUseState.tsx'
//import { ScrambleWordsUseReduce } from './05-useReducer/ScrambleWordsUseState.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster></Toaster>
    {/* <Suspense fallback={<h1>CARGANDO</h1>}>

      <ClientInformation getUser={getUserAction(10)}></ClientInformation>
    </Suspense> */}
    <ProfessionalApp></ProfessionalApp>
  </StrictMode>,
)
