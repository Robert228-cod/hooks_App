import { useForm } from "../Hooks/useForm"


export const TodoAdd = ({handleNewTodo}) => {
    
    const {description, onInputchange, formState, onReset} = useForm({
        description: ""
    })

    const onFromSubmit = (event) => {
        event.preventDefault()
        if(description.length < 1) return
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleNewTodo(newTodo)
        onReset()
    }
    
  return (
    <form onSubmit={onFromSubmit}>
        <input 
            type="text"
            placeholder="¿Que hay que hacer?"
            className="form-control" 
            name="description"
            value={description}
            onChange={onInputchange}
        />

        <button 
            type="submit"  
            className="btn btn-outline-primary mt-2" 
        >
            Agregar
        </button>
    </form>
  )
}
