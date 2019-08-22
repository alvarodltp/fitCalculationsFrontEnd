import React from 'react'

const BmrDescription = (props) => {
    const { allStats, currentUserStats, description } = props
    // const statBeforeLast = allStats.slice(-2)[0] //gets the stat before the last one in the arr
    // const moreThanOneStat = allStats.length >= 2 //returns false if there is more than one stat
    // const weightDifference = allStats.filter(stat => stat.id !== statBeforeLast.id)[0].weight_in_lb - statBeforeLast.weight_in_lb //returns a positive or negative number based on previous weights
  return(
    <React.Fragment>
        <div className="description">
          <div className="result-description">
            <h4>Your BMR (Basal Metabolic Rate)</h4>
            <p>Your BMR is the amount of calories your body needs to function at rest. In other words, your body needs {currentUserStats.bmr} calories to function if you were to sleep for a full day.</p>
          </div>
        </div>
      </React.Fragment>
  )
}

export default BmrDescription