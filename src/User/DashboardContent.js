import React from 'react';
import Calories from './Calories';
import UserProfile from './UserProfile'
import UserStats from './UserStats'

const DashboardContent = (props) => {
  return (
    <div className="nested-content">
      { props.page === "Profile" ? <UserProfile currentUserStats={props.currentUserStats}/> : null }
      { props.page === "Stats" ? <UserStats /> : null }
    </div>
  )
}

export default DashboardContent
