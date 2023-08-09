import React from 'react';
import AllUsers from './AllUsers'
import AllPending from './AllPending'

const AdminZone = (props) => {
  return (
    <div>
      <p className='title'>Users list</p>
      <AllUsers/>
      <p className='title'>Waiting approval</p>
      <AllPending/>
=
    </div>
  )
}
// AdminZone.default.props = {username:"Gilbert", about:"Hi", img: ""}
export default AdminZone