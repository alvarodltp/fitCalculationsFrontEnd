import React from 'react'
import Calories from './Calories'
import WeightChart from './WeightChart'
import BmiChart from './BmiChart'

const UserStats = (props) => {
  return(
    <div className="user-stats-dash">
      <div id="card-dashboard" className="weight-chart-title">
        <h2 style={{color: "black"}}>Weight History</h2>
      </div>
      <div id="card-dashboard" className="weight-chart">
        <WeightChart currentUserStats={props.currentUserStats}/>
      </div>
      <div id="card-dashboard" className="bmi-chart-title">
        <h2 style={{color: "black"}}>BMI History</h2>
      </div>
      <div id="card-dashboard" className="bmi-chart">
        <BmiChart currentUserStats={props.currentUserStats}/>
      </div>
    </div>
  )
}

export default UserStats
