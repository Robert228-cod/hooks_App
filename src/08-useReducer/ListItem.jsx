
export const ListItem = ({description = "null", deleteTodoFn, todo, onToggleTodo}) => {

  let message = ''
  if(todo.done === true) message = 'Click para deshacer el tachado'
    else message = 'Click para tachar la tarea'

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`aling-self-center ${ todo.done === true && 'text-decoration-line-through' } `} 
          onClick={() => onToggleTodo( todo.id )}
          title={message} 
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
