import { useEffect, useState } from "react"

const useRandomNumber=()=>{
    const [number,setNumber]=useState()
    useEffect(()=>{
       setNumber(Math.floor(Math.random() * 19));
    },[])
    return number
}

export default useRandomNumber