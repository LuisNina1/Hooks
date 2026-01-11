import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubTitle } from "./ui/MySubTitle"

export const MemoHook = () => {

  const [title, setTitle] = useState('hola')
  const [subTitle, setSubTitle] = useState('mundo')

  const handleAPICall = useCallback(() => {
    console.log("se llamo a la api")
  },[])
  return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h1 className='text-2xl font-thin text-white'>MemoApp</h1>
      <MyTitle title={title}></MyTitle>
      <MySubTitle subtitle={subTitle} callMyAPI={handleAPICall}></MySubTitle>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle('hello' + new Date().getTime())}
      >
        Cambiar titulo</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setSubTitle('world')}
      >
        Cambiar subtitulo</button>
    </div>
  )
}
