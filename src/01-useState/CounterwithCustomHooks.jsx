import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterwithCustomHooks = () => {

  const  { Counter,Reset,decrement,increment } = useCounter();






  return (
    <>
        <h1>Counter with hook : {Counter}</h1>

        <button className='btn btn-primary' onClick={increment} >+1</button>
        <button className='btn btn-primary' onClick={Reset}>Reset</button>
        <button className='btn btn-primary' onClick={decrement} >-1</button>

    </>
  )
}
