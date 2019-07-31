import React from 'react'
import './UserDashboard.css'
import DashboardNav from './DashboardNav'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'


const UserDasboard = (props) => {
  return (
    <div id="user-dashboard">
      <DashboardNav user={props.user} logOut={props.logOut}/>
      <DashboardMenu user={props.user} />
      <DashboardContent user={props.user} currentUserStats={props.currentUserStats}/>
    </div>
  )
}

export default UserDasboard
