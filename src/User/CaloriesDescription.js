import React from 'react'

const CaloriesDescription = (props) => {
    const { allStats, currentUserStats, description } = props
    // const statBeforeLast = allStats.slice(-2)[0] //gets the stat before the last one in the arr
    // const moreThanOneStat = allStats.length >= 2 //returns false if there is more than one stat
    // const weightDifference = allStats.filter(stat => stat.id !== statBeforeLast.id)[0].weight_in_lb - statBeforeLast.weight_in_lb //returns a positive or negative number based on previous weights
  return(
    <React.Fragment>
        <div className="description">
          <div className="result-description">
            <h4>Your Goal Calories</h4>
            <p>Your need to consume {currentUserStats.calories_for_goal} calories daily to {currentUserStats.goal}. The closer you get to this number every day, the faster you will get results.</p>
          </div>
        </div>
      </React.Fragment>
  )
}

export default CaloriesDescription