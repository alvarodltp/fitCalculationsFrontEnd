import React from 'react';
import Calories from './Calories';
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import NewCalculationContainer from './NewCalculationContainer'

const DashboardContent = (props) => {
  // debugger
  return (
    <div className="nested-content">
      { props.page === "Profile" ? <UserProfile currentUserStats={props.currentUserStatsNewCalc} /> : null }
      { props.page === "Stats" ? <UserStats currentUserStats={props.currentUserStats} /> : null }
      { props.page === "Start New Calculation" ? <NewCalculationContainer currentUserStatsNewCalc={props.currentUserStatsNewCalc} calculateBmr={props.calculateBmr} handleChangeDropdown={props.handleChangeDropdown} handleChange={props.handleChange} currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]} /> : null }
    </div>
  )
}

export default DashboardContent
