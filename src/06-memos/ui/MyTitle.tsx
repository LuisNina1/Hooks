import React from "react"

interface Props{
  title: string
}

export const MyTitle = React.memo(({title}: Props) => {
  console.log('title render')
  return (
    <div>{title}</div>
  )
})
