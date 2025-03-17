import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState =[{
    id: new Date().getTime(),
    description: 'recolectar materiales',
    done: false
},{
    id: new Date().getTime() * 3,
    description: 'recolectar comida',
    done: false
}]


export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
        console.log({todo})
    }
  
    return (
    <>
        <h1> Todo App (10) <small>, Pendientes: 2</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos}
                />
            </div>

            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr />
                <TodoAdd 
                    handleNewTodo={handleNewTodo}
                />
            </div>

        </div>
        
        
    </>
  )
}
