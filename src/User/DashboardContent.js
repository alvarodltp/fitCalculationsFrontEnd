import React from 'react';
import Calories from './Calories';
import UserProfile from './UserProfile'
import UserStats from './UserStats'

const DashboardContent = (props) => {
  debugger
  return (
    <div className="nested-content">
      { props.page === "Profile" ? <UserProfile currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]} /> : null }
      { props.page === "Stats" ? <UserStats currentUserStats={props.currentUserStats} /> : null }
    </div>
  )
}

export default DashboardContent
