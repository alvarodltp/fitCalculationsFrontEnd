import React from 'react'
import WeightChart from './WeightChart'
import BmiChart from './BmiChart'
import ExpenseChart from './ExpenseChart'

const UserStats = (props) => {
  return(
    <div className="user-stats-dash">
      <div id="card-dashboard-orange" className="weight-chart-title">
        <h2 style={{color: "white"}}>Weight History</h2>
      </div>
      <div id="card-dashboard" className="weight-chart">
        <WeightChart currentUserStats={props.currentUserStats}/>
      </div>
      <div id="card-dashboard-orange" className="bmi-chart-title">
        <h2 style={{color: "white"}}>BMI History</h2>
      </div>
      <div id="card-dashboard" className="bmi-chart">
        <BmiChart currentUserStats={props.currentUserStats}/>
      </div>
      <div id="card-dashboard-orange" className="expense-chart-title">
        <h2 style={{color: "white"}}>Food Expense History</h2>
      </div>
      <div id="card-dashboard" className="expense-chart">
      <ExpenseChart userFoodLists={props.userFoodLists}/>
      </div>
    </div>
  )
}

export default UserStats
