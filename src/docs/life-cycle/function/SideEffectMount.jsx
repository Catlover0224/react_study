import React, { useEffect, useState } from 'react';

const SideEffectMount = () => {
    //유저 리스트
    const [users, setUsers] = useState([]);

    const getUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            //setUsers(data);
            return data;
        } catch (error) {
            console.log("🚀 ~ getUserData ~ error:", error);   
        }
    }

    useEffect(()=>{
        getUserData().then((setUsers)) 
    }, []);
       
    return (
        <div>
            <h1>유저 이름들</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SideEffectMount;
