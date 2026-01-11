import React from "react"

interface Props {
  subtitle: string
  callMyAPI: () => void;
}

export const MySubTitle = React.memo(({ subtitle, callMyAPI }: Props) => {
  console.log('subtitle render')
  return (
    <>
    <h3>{subtitle}</h3>
    <button onClick={callMyAPI}>Llamar a funcion</button>
    </>
  )
})