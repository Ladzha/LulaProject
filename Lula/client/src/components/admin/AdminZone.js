import React from 'react';
import RecordToApproval from './RecordToApproval'
import AllUsers from './AllUsers'

const AdminZone = (props) => {
  return (
    <div>
      <p className='title'>Users list</p>
      <AllUsers/>
      <p className='title'>Waiting approval</p>
      <RecordToApproval img = {props.img}/>
    </div>
  )
}
// AdminZone.default.props = {username:"Gilbert", about:"Hi", img: ""}
export default AdminZone