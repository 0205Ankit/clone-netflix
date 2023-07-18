import { getuserByUserId } from "../services/firebase"
import { useSelector } from "react-redux"
import { useEffect,useState } from "react"


const useAutoId=()=>{
    const userId= useSelector(state=>state.user.user)
    const [id, setId]=useState()

    useEffect(()=>{
        const autoid=async()=>{
            const data= await getuserByUserId(userId)
            setId(data)
        }
        if(userId){autoid()}
    },[userId])

return id
}

export default useAutoId