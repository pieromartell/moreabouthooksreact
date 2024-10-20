import { useState } from "react"

export const CounterApp = () => {


const [Counter, setCounter] = useState({
    Counter1 :10,
    Counter2 :20,
    Counter3 :30,
    
})     




  return (
    <>
        <h1>CounterApp {Counter1}</h1>
        <h1>CounterApp {Counter2}</h1>
        <h1>CounterApp {Counter3}</h1>



        <hr></hr>

        <button onClick={ () => setCounter(c)}>  + 1 </button>
    </>
  ) 
}
