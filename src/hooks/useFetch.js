import { useEffect, useState } from "react";

export const useFetch = (url) => {


    useEffect(() => {
        getFetch();
    }, [])

    const getFetch = async() =>{
       const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      
      await new Promise(resolve => setTimeout(resolve,1500));

      
       if(!resp.ok){
        setstate({
            data : null,
            isLoading : false,
            hasError: true,
            error: {
                code: resp.status,
                message: resp.statusText,
            }
        });
        return;
      }
      //
      
       const data = await resp.json();
       setstate({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
       })
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
