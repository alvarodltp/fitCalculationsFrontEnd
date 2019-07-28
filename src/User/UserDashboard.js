import React from 'react'
import './UserDashboard.css'
import DashboardNav from './DashboardNav'
import DashboardMenu from './DashboardMenu'
import DashboardContent from './DashboardContent'


const UserDasboard = () => {
  return (
    <div id="user-dashboard">
      <DashboardNav />
      <DashboardMenu />
      <DashboardContent />
    </div>
  )
}

export default UserDasboard
