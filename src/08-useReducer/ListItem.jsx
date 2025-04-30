import React from 'react'

export const ListItem = ({description = "null", deleteTodoFn, todo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`aling-self-center ${ todo.done === true && 'text-decoration-line-through' } `} 
          onClick={() => onToggleTodo( todo.id )}
        > 
          {todo.description} 
        </span>
        <button 
          className="btn btn-danger"
          onClick={() => deleteTodoFn(todo.id)}
        > Eliminar </button>
    </li>
  )
}
