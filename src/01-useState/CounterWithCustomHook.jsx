import { useCounter } from "../Hooks/useCounter"


export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter() // custom hook
  
  return (
    <>
      <div>Counter With Hook: {counter}</div>

      <hr />
      
      <button className="btn btn-primary" onClick={ () => increment(2) }> +2 </button>
      <button className="btn btn-primary" onClick={ reset }> Reset </button>
      <button className="btn btn-primary" onClick={ decrement }> -1 </button>
    </>
  )
}
