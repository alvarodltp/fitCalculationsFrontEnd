import React from 'react'

const DashboardContent = (props) => {
  debugger
  return (
    <div className="dash-content">
      <p>{props.currentUserStats.activity_level}</p>
    </div>
  )
}

export default DashboardContent
