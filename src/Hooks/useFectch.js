import { useEffect, useState } from "react"

const localCache = {}

export const useFectch = ( url ) => {
    
    const [state, setState] = useState({
        data: null, 
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch()
    },[url])

    const setIsLoading = () => {
        setState({
            data: null, 
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    const getFetch = async() => {
        // para verificar si la informacion ya esta en cache para no volver a hacer la peticion http
        if(localCache[url]){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return // si lo hay, se sale, ya no hace nada mas
        }
        //
        setIsLoading()
        const resp =  await fetch(url)
        if(!resp.ok){ // condicion si es que la peticion falla
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            }) 
            return // si hay un error, terminamos, ya no hace nada mas
        }
        
        const data = await resp.json()
        
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        }) 
        localCache[url] = data
        
    }


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error
  }
}
