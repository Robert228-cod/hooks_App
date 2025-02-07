import { useForm } from "../Hooks/useForm.js"

export const FormWithCustomHook = () => {
    
    const { formState, onInputchange, onReset } = useForm({
        username: '',
        email: '',
        password: '',
    })
    const { username, email, password } = formState

    return (
    <>
        <div>Formulario con Custom Hook</div>
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

        <input 
            type="password" 
            placeholder="Contraseña"
            className="form-control mt-2"
            name="password"   
            value={ password }
            onChange={ onInputchange }
        />

        <button onClick={ onReset } className="btn btn-primary mt-2 "> Borrar datos </button>
    </>
  )
}
