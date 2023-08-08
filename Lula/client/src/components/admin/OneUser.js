import React from 'react';
import {UserService} from '../../services/users.service.js'
import {useState, useEffect, useParams} from 'react';

const OneUser = () => {

    const {id} =useParams();

    const [user, setUser]=useState([]);

    useEffect(()=>{
        if(!id) return
        const fetchData = async ()=>{
            const data = await UserService.getById(id)
            setUser(data)
        }
        fetchData()
    },[id])

  return (
    <div>AllUsers
            <p>User Id: {user.userid}</p>
            <p>User Username: {user.username}</p>
            <p>User first Name: {user.firstname}</p>
 
    </div>
  )
}

export default OneUser