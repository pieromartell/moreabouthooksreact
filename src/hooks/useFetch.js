import { useEffect, useState } from "react";

export const useFetch = () => {


    useEffect(() => {
        getFetch();
    }, [])

    const getFetch = async() =>{
       const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
       const data = await resp.json();
       console.log({data});
    }
    

    const [state, setstate] = useState({
        data:null,
        isLoading:true,
        hasError: false,
        error: null
    })


    return {
        data: state.data,
        isLoading : state.isLoading,
        hasError: state.hasError,

    };
}
