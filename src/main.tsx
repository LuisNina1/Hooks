import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

//import { HooksApp } from './HooksApp.tsx'
import './index.css'
// import { InstagromApp } from './07-useOptimistic/InstragromApp'
import { ClientInformation } from './08-use-suspense/ClientInformation'
import { getUserAction } from './08-use-suspense/api/get-user'
//import { ScrambleWordsUseReduce } from './05-useReducer/ScrambleWordsUseState.tsx'
//import { ScrambleWordsUseReduce } from './05-useReducer/ScrambleWordsUseState.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster></Toaster>
    <Suspense fallback={<h1>CARGANDO</h1>}>

      <ClientInformation getUser={getUserAction(10)}></ClientInformation>
    </Suspense>
  </StrictMode>,
)
