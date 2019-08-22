import React from 'react'

const WeightDescription = (props) => {
    const { allStats, currentUserStats} = props
    const statBeforeLast = allStats.slice(-2)[0] //gets the stat before the last one in the arr
    const moreThanOneStat = allStats.length >= 2 //returns false if there is more than one stat
    const weightDifference = moreThanOneStat === true ? allStats.filter(stat => stat.id !== statBeforeLast.id).pop().weight_in_lb - statBeforeLast.weight_in_lb : null//returns a positive or negative number based on previous weights
    debugger
  return(
    <React.Fragment>

        <div className="description">
        { moreThanOneStat === false ?
          <div className="result-description">
            <h4>Your Weight</h4>
            <p>Congrats on your first calculation. You weight status will appear here when you have more than one calculation in your account.</p> 
          </div> : null }

          { moreThanOneStat === true && Math.sign(weightDifference) === -1 && currentUserStats.goal === "Lose Weight/Get Lean" ?
          <div className="result-description">
            <h4>Your Weight</h4>
            <p>Congrats, you have lost {Math.abs(weightDifference)} pounds since your last measurement! Keep up the great work and make sure to start a new calculation every two weeks so you can follow up to date calorie and macronutrient needs.</p> 
          </div> : null }

          { moreThanOneStat === true && Math.sign(weightDifference) === -1 && currentUserStats.goal === "Gain Muscle" ?
          <div className="result-description">
            <h4>Your Weight</h4>
            <p>Your goal is to gain muscle, but you have lost {Math.abs(weightDifference)} pounds since your last measurement. Make sure to get close to your goal calories in a consistent basis.</p> 
          </div> : null }

          { moreThanOneStat === true && Math.sign(weightDifference) === 1 && currentUserStats.goal === "Lose Weight/Get Lean" ?
          <div className="result-description">
            <h4>Your Weight</h4>
            <p>Your goal is to lose weight and get lean, but you have gained {Math.abs(weightDifference)} pounds since your last measurement. Make sure to get close to your goal calories in a consistent basis.</p> 
          </div> : null }

          { moreThanOneStat === true && Math.sign(weightDifference) === 1 && currentUserStats.goal === "Gain Muscle" ?
          <div className="result-description">
            <h4>Your Weight</h4>
            <p>Congrats, you have gained {Math.abs(weightDifference)} pounds since your last measurement. Keep up the great work and make sure to start a new calculation every two weeks so you can follow up to date calorie and macronutrient needs.</p> 
          </div> : null }
        </div>
      </React.Fragment>
  )
}

export default WeightDescription