import React from 'react'
import {useState, useEffect} from 'react';

const AllUsers = () => {

    const [users, setUsers]=useState([]);

    useEffect(()=>{
        getUserList()
    },[])

    const getUserList = async ()=>{
        
        try {
        const response = await fetch('http://localhost:3001/api/users')
        if(response.ok){
            const userList = await response.json();
            setUsers(userList)
            console.log(userList);
        }else{
            console.log('Failed to find users');
        }
        } catch (error) {
            console.log(error);
        }
    }

    


  return (
    <div>AllUsers
        <ul>
        {users.length>0 && users.map(user=> { 
            return (<div>
            <li key={user.userid}>
            <p>User Id: {user.userid}</p>
            <p>User Username: {user.username}</p>
            <p>User first Name: {user.firstname}</p>
            </li>
            </div>)
            
            })}
        </ul>
    </div>
  )
}

export default AllUsers