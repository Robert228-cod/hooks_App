import { useState } from "react"

export const CounterApp = () => {
    
    const [counter, setCounter] = useState({
        contador1: 10,
        contador2: 20,
        contador3: 30
    })
    const { contador1, contador2, contador3 } = counter

    const sumarContador1 = () => {
        
        setCounter({
            ...counter, // operador spread para copiar todo el contenido, excepto que sobreescribimos el contador1
            contador1: contador1 + 1
        }) 
    }

    return (
        <>
            <h1>Contador 1 : {contador1}</h1>
            <h1>Contador 2 : {contador2}</h1>
            <h1>Contador 3 : {contador3}</h1>

            <button 
                className="btn"
                onClick={ sumarContador1 }    
            > +1 </button>
        </>
    )
}