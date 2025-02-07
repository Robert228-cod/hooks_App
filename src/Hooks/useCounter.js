import { useState } from "react"

export const useCounter = ( inictialValue ) => {

    const [counter, setCounter] = useState(inictialValue)

    const increment = (value = 1) =>{
        setCounter(counter + value)
    }
    const decrement = () => {
        setCounter( counter - 1)
    }
    const reset = () => {
        setCounter(inictialValue)
    }
    return {
        counter,
        increment,
        decrement,
        reset,
        setCounter,
    }
}