import { useState } from 'react'
import { UserContext } from './UserContext'

/*const user = {
    id: 1234,
    name: "Robert Lopez",
    email: "robertlopez@gmail.com"
}*/   
export const UserProvider = ({children, estado}) => {

    const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{user, setUser, estado}}>
        {children}
    </UserContext.Provider>
  )
}
