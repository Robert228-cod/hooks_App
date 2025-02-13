import { useState } from "react"
import { useCounter } from "../Hooks/useCounter"
import { Small } from "./Small"


export const Memorize = () => {
  
    const { counter, increment} = useCounter(10)
    const [cond, setCond] = useState(true)

    return (
    <>
        <h1>Counter: <Small value = {counter} /></h1>
        <hr />

        

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
