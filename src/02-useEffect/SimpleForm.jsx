import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleFrom = () => {
    
    const [formState, setFormState] = useState({
        username: 'Robert',
        email: 'robert@gmail.com'
    })
    const { username, email } = formState

    const onInputchange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        }) 
    }

    

    return (
    <>
        <div>Formulario simple</div>
        <hr />
        <input 
            type="text" 
            placeholder="Username"
            className="form-control"
            name="username"    
            value={ username }
            onChange={ onInputchange }
        />
        <input 
            type="email" 
            placeholder="Correo electronico"
            className="form-control mt-2"
            name="email"    
            value={ email }
            onChange={ onInputchange }
        />

        {
            (username === "Robert2") && <Message/>
        }
    </>
  )
}
