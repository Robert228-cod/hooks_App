import { useState, useEffect } from "react"


export const Message = () => {

    const [coord, setCoord] = useState({x: 0, y:0})

    useEffect(() => {
        
        // para recuperar las coordenadas del puntero del mouse
        const onMouseMove = ({ x, y}) => {
            setCoord({x: x, y: y})
        }
        
        window.addEventListener('mousemove', onMouseMove) // añade un observable para el mouse
    
      return () => {
        window.removeEventListener('mousemove', onMouseMove) // cleanUP, elimina el observable (importante)
      }
    }, [])
    
    
    return (
        <>
            <h2> Este usuario ya existe </h2>
            { JSON.stringify( coord ) }
        </>
    )
}