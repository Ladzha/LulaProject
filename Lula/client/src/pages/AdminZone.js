import React from 'react';
import AllUsers from '../components/admin/AllUsers'
import AllPending from '../components/admin/AllPending'

const AdminZone = () => {
  return (
    <div  className='adminContainer'>
      {/* <p className='title'>Users list</p> */}
      {/* <AllUsers/> */}
      <p className='title'>Waiting approval</p>
      <AllPending/>
=
    </div>
  )
}
// AdminZone.default.props = {username:"Gilbert", about:"Hi", img: ""}
export default AdminZone