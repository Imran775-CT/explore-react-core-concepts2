import { useEffect, useState } from "react"

export default function Users() {
const [users, setUsers] = useState([])
useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json())

       .then(data => setUsers(data))
},[])

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}


/**
 * 1. declare a state  to hold the data
 * 2. UseEffect with callBack and dependencies array 
 * 3. Use effect to load data .
 */