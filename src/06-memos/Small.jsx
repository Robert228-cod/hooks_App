import React from 'react'

export const Small = React.memo(({ value }) => {
    //memo se utiliza para que algun componente no se vuelva a renderizar si este no hizo ningun cambio,
    //y si es que el componente padre si se volvio a rendezirar
    //util si el componente tiene procesos pesados
    console.log("small se renderizó")

  return (
    <small> { value } </small>
  )
})
