import React from 'react'
import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {



    const {data, hasError, isLoading} = useFetch("https://pokeapi.co/api/v2/pokemon/1");
  return (
    <>
      <h1> Informacion de pokenos </h1>
      <hr></hr>

      {isLoading && <p>Cargando....</p>}
      <pre>{data?.name}</pre>

      <butt>
        
      </butt>
    </>


  )
}
