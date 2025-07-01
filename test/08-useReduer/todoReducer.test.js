import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('pruebas en ToDoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'DEMO todo',
        done: false
    },{
        id: 2,
        description: 'segundo TODO',
        done: false
    }]
    
    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {})
        expect( newState ).toBe( initialState )

    })

    test('debe agragar un nuevo todo', () => {

        const action = {
            type: '[ToDo] add Todo',
            payload: {
                id: 2,
                description: 'nuevo todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action)
        expect( newState.length ).toEqual( 3 )
        expect( newState ).toContain( action.payload )
        
    })

    test('debe eliminar un TODO', () => {

        const action = {
            type: '[ToDo] remove Todo',
            id: 2
        }
        
        const newState = todoReducer(initialState, action)
        console.log(newState)

    })

    test('debe realizar el toggle del todo', () => {


        
    })

})