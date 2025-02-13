import { useMemo, useState } from "react"
import { useCounter } from "../Hooks/useCounter"

const heavyStuff = ( iterationNumber ) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log('ahi vamos....')
    }
    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
  
    const { counter, increment} = useCounter(2000)
    const [cond, setCond] = useState(true)

    //memorizedValue memoriza el valor que lanza la funcion "heavyStuff"
    //y solo se volvera a renderizar si sus dependencias (en este caso el counter) cambie
    //si no tiendependencias ([]) memorizara el primer valor lanzado
    const memorizedValue = useMemo(() => heavyStuff(counter),[counter])

    return (
    <>
        <h1>Counter: {counter}</h1>
        <hr />

        <h4> {memorizedValue} </h4>

        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1
        </button>

        <button
            onClick={() => setCond(!cond)}
        >
            {JSON.stringify(cond)}
        </button>
        
    </>
  )
}
