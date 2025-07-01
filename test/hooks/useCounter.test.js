import { render, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/Hooks/useCounter'
import { act } from "react";

describe('pruebas en el useCounter', () => { 

    test('debe retornar los valores por defecto', () => { 
         
        const {result} = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset, setCounter } = result.current

        expect(counter).toBe(10)
        expect(increment).toEqual( expect.any( Function ))
        expect(decrement).toEqual( expect.any( Function ))
        expect(reset).toEqual( expect.any( Function ))
        expect(setCounter).toEqual( expect.any( Function )) 

    });

    test('debe retornar el valor de 100', () => {
        
        const {result} = renderHook( () => useCounter(100) )

        expect(result.current.counter).toBe(100)
    });

    test('debe incrementar el contador', () => {
        
        const {result} = renderHook( () => useCounter(100) )
        const { increment } = result.current

        act( () => {
            increment()
            increment(2)
        })
        //hacer current para que tome el valor actual a evaluar, si se llamo una funcion que lo actualiza
        expect(result.current.counter).toBe(103)

    })

    test('debe decrementar el contador', () => {
        
        const {result} = renderHook( () => useCounter(100) )
        const { decrement } = result.current

        act( () => {
            decrement()
            decrement(2)
        })
        //hacer current para que tome el valor actual a evaluar, si se llamo una funcion que lo actualiza
        expect(result.current.counter).toBe(97)

    })

    test('debe resetear el contador', () => {
        
        const {result} = renderHook( () => useCounter() )
        const { reset, increment } = result.current

        act( () => {
            increment(5)
            reset()
        })
        
        expect(result.current.counter).toBe(10)

    })

 });