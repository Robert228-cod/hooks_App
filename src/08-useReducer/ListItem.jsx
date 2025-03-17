import React from 'react'

export const ListItem = ({description = "null"}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span className="aling-self-center" > {description} </span>
        <button className="btn btn-danger"> Eliminar </button>
    </li>
  )
}
