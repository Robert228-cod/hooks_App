import { useState } from "react"

export const useCounter = ( inictialValue = 10 ) => {

    const [counter, setCounter] = useState(inictialValue)

    const increment = (value = 1) =>{
        //current es el valor actual, ya no tomar el valor de "counter"
        setCounter((current) => current + value)
    }
    const decrement = (value = 1) => {
        setCounter((current) => current - value)
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