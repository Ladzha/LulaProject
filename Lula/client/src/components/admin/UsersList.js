import React from 'react';
import {useState} from 'react';

const UsersList = async() => {

    const [users, setUsers]=useState([]);

    // try {
    //     const response = await fetch('http://localhost:3001/api/users')
    //     if(response.ok){
    //         const userList = await response.json();
    //         setUsers(userList)
    //         console.log(userList);
    //     }else{
    //         console.log('Failed to find users');
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
  return (
    <div>UsersList
        {/* <ul>
        {users.map(user=>{
            <li key={user.userid}>
                <p>User Id: {user.userid}</p>
                <p>User Username: {user.username}</p>
                <p>User first Name: {user.firstname}</p>
            </li>
            })}
        </ul> */}
    </div>
  )
}

export default UsersList