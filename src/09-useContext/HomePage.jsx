import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const HomePage = () => {

  const { user, estado } = useContext(UserContext)

  return (
    <>
        <h1> Home Page  <small> {user?.name} </small> </h1>
        <hr />

        <h1>estado: {estado}</h1>
    </>
  )
}
