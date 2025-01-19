import React from 'react'
import { useFetch } from '../hooks'

export const MultipleCustomHooks = () => {



    const {data, hasError, isLoading} = useFetch();
  return (
    <>
      <h1> Informacion de pokenos </h1>
      <hr></hr>

      {isLoading && <p>Cargando....</p>}
      <pre>{JSON.stringify(data,null,2)}</pre>
    </>


  )
}
