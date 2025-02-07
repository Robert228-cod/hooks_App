import { useState } from "react"
import { useFectch } from "../Hooks/useFectch"
import { useCounter } from "../Hooks/useCounter"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {
    
    const [name, setName] = useState(1)
    const [pokeName, setPokeName] = useState('') // para setear el nombre cuando se de a BUSCAR
    const [undo, setUndo] = useState(['bulbasaur'])
    const [redo, setRedo] = useState([])
    
    const handleName = (event) => {
        setPokeName(event.target.value)
    }
    const confirm = () => {
        setName(pokeName)
        setPokeName('')
        
        const newValue = [...undo, pokeName]
        setUndo(newValue)
    }
    const next = () => {
        if(redo.length > 0){
            const newUndo = [...redo].pop()
            const newListUndo = [...undo, newUndo]
            setUndo(newListUndo)

            const newListRedo = [...redo]
            newListRedo.pop()
            setRedo(newListRedo)
        }else{
            return
        }
    }
    const previus = () => {
        if(undo.length > 1){
            const newRedo = [...undo].pop()
            const newListRedo = [...redo, newRedo]
            setRedo(newListRedo)

            const newListUndo = [...undo]
            newListUndo.pop()
            setUndo(newListUndo)
        }else{
            return
        }
    }
    
    //const { counter, increment, decrement,setCounter} = useCounter(1)
  
    const {data, isLoading, hasError, error} = useFectch(`https://pokeapi.co/api/v2/pokemon/${undo[undo.length - 1]}`)

    return (
        <>
            <h1> Pokemon info: </h1>
            <hr />
            <h3> Insert a Pokemon name or ID: </h3>
            <input 
                type="text"
                placeholder="Example: pikachu or 25"
                value={ pokeName }
                onChange={ handleName }
             />
            <button onClick={confirm} style={{marginLeft: "10px"}}> Search </button>

            { isLoading === true && 
                <LoadingMessage />
            }
            { (isLoading === false && data !== null) &&
                <PokemonCard 
                    id = { data.id }
                    name = { data.name }
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.back_default,
                        data.sprites.front_shiny,
                        data.sprites.back_shiny,
                    ]}
                    types={[
                        data.types
                    ]}
                    stats={[
                        data.stats
                    ]}
                    abilities={[
                        data.abilities
                    ]}
                /> 
            }


            {/*para mostrar todo la info: <pre> { JSON.stringify(data,null,2) } </pre> */}
            
            { hasError === true && 
                <div style={ {color: "red"} }>
                    <p> Nombre no encontrado </p>
                    <p> Error Nro. { error.code } </p> 
                </div>
            }

            <button
                style={{marginTop: "40px"}}
                className="btn btn-primary"  
                onClick={ previus/*() => counter > 1 ? decrement() : null /* mandar null en un onclick es permitido */ }
            > Previus </button>

            <button
                style={{marginTop: "40px"}}
                className="btn btn-primary"  
                onClick={ next/*() => increment()*/}
            > Next </button>

        </>
    )
}
