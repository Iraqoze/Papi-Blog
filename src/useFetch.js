import { useState, useEffect } from "react"

const useFetch=(url)=>{

    const [data, setData]=useState(null) 
    const [isPending, setIsPending]=useState(true)
    const [error, setError]=useState(null)
    
    useEffect(()=>{
        setTimeout(()=>{
        fetch(url)
            .then(res=>{
                if(!res.ok){
                    throw Error('Could Not fetch the data from that resource')
                }

                console.log(res);
                return res.json()
            })
            .then(data=>{
                console.log(data);
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error=>{
                setError(error.message)
                setIsPending(false)
            })
    
    },1000);
    },[])

    return {data, isPending, error}

}

export default useFetch;