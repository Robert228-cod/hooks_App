 export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[ToDo] add Todo':
            // se debe retornar lo mismo al initialState, en este caso en un arreglo asi que regresamos un arrelo
            return [ ...initialState, action.payload ]

        case '[ToDo] remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)
            
        case '[ToDo] toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })

        default:
            return initialState;
    }
 }