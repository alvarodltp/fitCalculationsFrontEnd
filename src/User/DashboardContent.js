import React from 'react'

const DashboardContent = (props) => {
  debugger
  return (
    <div className="dash-content">
      <p>{props.currentUserStats[0].activity_level}</p>
    </div>
  )
}

export default DashboardContent
