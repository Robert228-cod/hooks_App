import { useState } from "react"


export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm )

    const onInputchange = ({target}) => {
        // para guardar todo lo que hay en los inputs en el objeto formState
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        }) 
    }

    const onReset = () => {
        // el initialForm es como una plantilla del formulario, con sus propiedades pero vacias
        // asi que el initialForm es el estado original y puede usarse para vaciar los datos puestos en los inputs
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputchange,
        onReset
    }
}
