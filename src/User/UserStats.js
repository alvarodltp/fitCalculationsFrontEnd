import React from 'react'
import WeightChart from './WeightChart'
import BmiChart from './BmiChart'
import ExpenseChart from './ExpenseChart'

const UserStats = (props) => {
  return(
    <div className="user-stats-dash">
      <div className="weight-chart-title card-dashboard-orange">
        <h2 style={{color: "white"}}>Weight History</h2>
      </div>
      <div id="card-dashboard" className="weight-chart">
        <WeightChart currentUserStats={props.currentUserStats}/>
      </div>
      <div className="bmi-chart-title card-dashboard-orange">
        <h2 style={{color: "white"}}>BMI History</h2>
      </div>
      <div className="bmi-chart card-dashboard">
        <BmiChart currentUserStats={props.currentUserStats}/>
      </div>
      <div className="expense-chart-title card-dashboard-orange">
        <h2 style={{color: "white"}}>Food Expense History</h2>
      </div>
      <div id="card-dashboard" className="expense-chart">
      <ExpenseChart userFoodLists={props.userFoodLists}/>
      </div>
    </div>
  )
}

export default UserStats
