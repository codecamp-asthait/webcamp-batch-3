const USER_API_URL = "https://jsonplaceholder.typicode.com/users";
import { useEffect, useState } from "react";

export  const useFetchUserList = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [retryStatus, setRetryStatus] = useState(false);

    const loadUsers = async (controller) => {
        setLoading(true);
        // fetch(USER_API_URL).then((response)=>{
        //     if(response.ok){
        //         console.log(response , "response")
        //         return response.json();
        //     }
        // }).then((data)=>{
        //     console.log(data , "data")
        //     setUserList(data);
        // }).catch((error)=>{
        //     console.log(error , "error")
        // }).finally(()=>{
        //     console.log("fetching users completed")
        //     setLoading(false);
        // })
        try{
            const response = await fetch(USER_API_URL, { signal: controller.signal });
            const data = await response.json();
            setUserList(data);
            setLoading(false);
        }catch(error){
            console.log(error , "error")
            setLoading(false);
        }
    }

    useEffect(()=>{
        const controller = new AbortController();
        console.log("effect called in user list component")
        loadUsers( controller);
        return()=>{
            console.log("cancaled function")
            controller.abort();
        }
    },[retryStatus])

    return { userList, loading, setRetryStatus };
}