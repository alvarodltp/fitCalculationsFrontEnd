import React from 'react'

const Calories = (props) => {
  console.log(props)
  return (
    <div className="calories-container">
      <div className="card-dashboard">
        <h1>Calories</h1>
        <h4>For Survival: {props.currentUserStats[0].bmr}</h4>
        <h4>For Goal: {props.currentUserStats[0].calories_for_goal}</h4>
        <h4>For Maintenance: {props.currentUserStats[0].calories_to_maintain}</h4>
      </div>
    </div>
  )
}

export default Calories
