import React from 'react'

const DashboardContent = (props) => {
  debugger
  return (
    <div className="dash-content">
      {props.currentUserStats.calories_for_goal}
    </div>
  )
}

export default DashboardContent
