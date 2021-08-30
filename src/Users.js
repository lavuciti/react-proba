import React, { useEffect, useState } from 'react';

function StartGame(){

    const [users, setUsers] = useState([]);

    //Na kraju funkcije useEffect se stavlja [] da ne bi u beskonacnosti ucitavao funkciju

    useEffect(()=>{
        console.log("Component render finishe");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(result=>{
            setUsers(result)
        })
    },[])

    return(
        <div className="container text-center">
            <h1>Users</h1>
            {users.map(user=>{
                return (
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </div>
    )
}

export default StartGame;