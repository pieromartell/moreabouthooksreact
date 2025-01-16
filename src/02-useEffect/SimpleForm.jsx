import React, { useEffect, useState } from 'react'
import { Message } from './Messa';

export const SimpleForm = () => {

    const [formstate, setformstate] = useState({
        username : 'Piero Martell',
        email: 'pmartell@apptelink.com'
    })    

    const {username,email} = formstate;

    const onInputChange = ({target}) =>{
        const {name, value } = target;
        setformstate({
            ...formstate,
            [name] : value
        })
    }

    useEffect(()=>{
        console.log("FormState Change")
    },[formstate])
    

    useEffect(()=>{
        console.log("email Change")
    },[email])
    

  return (
    <>
        <h1>Simple Form</h1>
        <hr>
        </hr>
        <input
            type='text'
            className='form-control'
            placeholder='Username'
            name="username"
            value={username}
            onChange={onInputChange}
        >
        </input>

{
    (username == 'Piero Martell') && <Message></Message>
}

       

        <input
            type='email'
            className='form-control mt-2'
            placeholder='pmartell@apptelink.com'
            name="email"
            value={email}
            onChange={onInputChange}
        >


        </input>

    </>
  )
}
