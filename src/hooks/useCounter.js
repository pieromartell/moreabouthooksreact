import { useState } from "react"

export const useCounter = (initialValue = 10) =>{

    const [Counter, setCounter] = useState(initialValue)

const increment = () =>{
    setCounter(Counter + 1)
}

const decrement = () =>{
    setCounter(Counter - 1)
}

const Reset  = () =>{
    setCounter(initialValue)
}

    return {
        Counter,
        increment,
        decrement,
        Reset
    }

}