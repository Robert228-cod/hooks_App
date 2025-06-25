import React from 'react'
import { useContext } from 'react'
import { UserContext } from './Context/UserContext';

export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);
  return (
    <>
        <h1> Login Page </h1>
        <hr />

        <pre>
          { JSON.stringify(user, null, 3) }
        </pre>

        <button className='btn btn-primary' onClick={() => setUser({id: 1234, name: "Juan", email: "juan@gmail.com"})}>
          Establecer usuario
        </button>

    </>
  )
}
