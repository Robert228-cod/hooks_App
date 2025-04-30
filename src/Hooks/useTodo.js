import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    //para guardar en localStorage cada vez que el todos cambie
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: '[ToDo] add Todo',
            payload: todo
        }
        //el dispatch es la funcion que se usa para mandar nuestra accion
        dispatch(action)
    }
    const handleRemoveTodo = (id) => {
        dispatch({
            type: '[ToDo] remove Todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[ToDo] toggle Todo',
            payload: id
        })
    }
    
    return {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        pendingTodos: todos.filter( todo => todo.done === false).length,
        CountTodos: todos.length
    }
}
