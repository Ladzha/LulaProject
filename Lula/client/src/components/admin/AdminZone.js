import React from 'react';
import AllUsers from './AllUsers'
import OneUser from './OneUser'
import AllPending from './AllPending'

const AdminZone = (props) => {
  return (
    <div>
      <p className='title'>Users list</p>
      <AllUsers/>
      <p className='title'>Waiting approval</p>
      <AllPending/>

      {/* <OneUser id="1"/> */}
    </div>
  )
}
// AdminZone.default.props = {username:"Gilbert", about:"Hi", img: ""}
export default AdminZone