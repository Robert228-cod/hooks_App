import React from 'react'
import { ListItem } from './ListItem'

export const TodoList = ({todos = []}) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <ListItem key={todo.id}
                    description={todo.description}
                />
            ))
        }
    </ul>
  )
}
