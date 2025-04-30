import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../Hooks/useTodo"

export const TodoApp = () => {
    //custom hook relacionado con todoReducer
    const { todos, handleNewTodo, handleRemoveTodo, handleToggleTodo, pendingTodos, CountTodos } = useTodo()
    
    return (
    <>
        <h1> Todo App ({CountTodos}) <small>, Pendientes: ({pendingTodos})</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos}
                    deleteTodo={handleRemoveTodo}
                    onToggleTodo={handleToggleTodo}
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
