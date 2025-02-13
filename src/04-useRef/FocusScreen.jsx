import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()   //mueve el puntero a un input en concreto, declarar "ref" en el componente html


    const onClick = () => {
        //document.querySelector('input').select() // para que el puntero se balla a lo que se escribio en el input(solo apuntara al primer input)
        inputRef.current.select()
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            ref={inputRef}
            type="text" 
            placeholder="Ingrese su nombre:"
            className="form-control"
        />

        <button
            onClick={onClick}
            className="btn btn-primary mt-2"
        >
            Set Focus
        </button>
    </>
  )
}
