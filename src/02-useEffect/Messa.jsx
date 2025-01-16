import React, { useEffect, useState } from 'react'

export const Message = () => {
 const [coords, setcoords] = useState({x:0,y:0})

useEffect(() => {
    

    const onMOuse = ({x,y}) =>{
        setcoords({x,y})        
    }

   window.addEventListener('mousemove',onMOuse);


  return () => {
    window.removeEventListener('mousemove',onMOuse);

  }
}, [])
   


  return (
    <>
    <h3>Usuario ya existe </h3>
    {JSON.stringify(coords)}
    </>
  )
}
