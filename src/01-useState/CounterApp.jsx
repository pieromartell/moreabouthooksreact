import { useState } from "react"

export const CounterApp = () => {


const [{Counter1,Counter2,Counter3}, setCounter] = useState({
    Counter1 :10,
    Counter2 :20,
    Counter3 :30,
    
})     



  return (
    <>
        <h1>Counter App CounterApp {Counter1}</h1>
        <h1>Counter App CounterApp {Counter2}</h1>
        <h1>Counter App CounterApp {Counter3}</h1>



        <hr></hr>

        <button onClick={ () => setCounter(c)}>  + 1 </button>
    </>
  ) 
}
