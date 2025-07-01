import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/Hooks/useForm"
import { act } from "react"

describe('pruebas en el useForm', () => {
    
    const initialForm = {
        name: 'Robert',
        email: 'robert@gmail.com'
    }

    test('debe regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) )

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputchange: expect.any( Function ),
            onReset: expect.any( Function )
        })

    })   
    
    test('debe cambiar el nombre del formulario', () => {
        
        const newValue = 'Juan'

        const {result} = renderHook( () => useForm(initialForm))
        const {onInputchange} = result.current

        act(() => {
            onInputchange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })
        })
        
        expect(result.current.name).toBe('Juan')
        expect(result.current.formState.name).toBe('Juan')
    })

    test('debe resetear el formulario', () => {
         
        const {result} = renderHook( () => useForm(initialForm))
        const {onInputchange, onReset} = result.current

        act(() => {
            onInputchange({
                target: {
                    name: 'name',
                    value: 'Carlos'
                }
            })
            onReset()
        })

        expect( result.current.name ).toEqual(initialForm.name)
        expect( result.current.formState.name ).toEqual(initialForm.name)

    })

})