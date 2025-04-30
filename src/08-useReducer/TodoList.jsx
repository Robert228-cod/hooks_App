import React from 'react'
import { ListItem } from './ListItem'

export const TodoList = ({todos = [], deleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <ListItem key={todo.id}
                    deleteTodoFn={deleteTodo}
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                />
            ))
        }
    </ul>
  )
}
