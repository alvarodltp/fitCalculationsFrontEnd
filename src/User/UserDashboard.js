import React from 'react'
import './UserDashboard.css'
import DashboardNav from './DashboardNav'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'


const UserDasboard = (props) => {
  return (
    <div id="user-dashboard">
      <DashboardNav currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]} logOut={props.logOut}/>
      <DashboardMenu currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]}/>
      <DashboardContent currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]}/>
    </div>
  )
}

export default UserDasboard
