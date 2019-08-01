import React from 'react';
import Calories from './Calories';
import UserProfile from './UserProfile'

const DashboardContent = (props) => {
  debugger
  return (
    <div className="nested-content">
      <UserProfile currentUserStats={props.currentUserStats}/>
    </div>
  )
}

export default DashboardContent
