import { getByText, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"

describe('prueba en <multipeCustomHook>', () => {
    
    test('debe retornar el componente por defecto', () => {
        
        render(<MultipleCustomHooks/>)

        expect( screen.getByText("Cargando...") )
        expect( screen.getByText("Insert a Pokemon name or ID:") )

        //para evaluar un boton
        const nextButton = screen.getByRole( 'button', { name: 'Search' } )
        expect( nextButton.disabled ).toBeFalsy()

    })

})