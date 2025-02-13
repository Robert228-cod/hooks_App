import React, { useCallback } from 'react'
import { useCounter } from '../Hooks/useCounter'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const {counter, setCounter} = useCounter(10)

    //useCallBack memoriza funciones   
    const incrementFather = useCallback( (numProp) => {
        setCounter((value) => value + numProp)
    },[])

    /*const incrementFather = () => {
        setCounter(counter + 1)
    }*/

  return (
    <>
        <h1>useCallback hook: {counter}</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
