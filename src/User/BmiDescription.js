import React from 'react'

const BmiDescription = (props) => {
    const { allStats, currentUserStats, description } = props
    // const statBeforeLast = allStats.slice(-2)[0] //gets the stat before the last one in the arr
    // const moreThanOneStat = allStats.length >= 2 //returns false if there is more than one stat
    // const weightDifference = allStats.filter(stat => stat.id !== statBeforeLast.id)[0].weight_in_lb - statBeforeLast.weight_in_lb //returns a positive or negative number based on previous weights
  return(
    <React.Fragment>
        <div className="description">
          <div className="result-description">
            <h4>Your BMI (Body Mass Index)</h4>
            <p>
              BMI or Body Mass Index is mostly used by doctors and nurses to help determine if a person has a weight problem. It gives an estimate of total body fat for most people, but it does not work well for individuals who have more muscle than the average person.
            </p>
          </div>
        </div>
      </React.Fragment>
  )
}

export default BmiDescription