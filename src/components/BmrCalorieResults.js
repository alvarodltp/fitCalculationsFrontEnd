import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
        <div id="bmr-results">
            <h2 id="bmr-results-text"><Icon style={{color: "yellow", border: "black"}} name="star" size="small" />YOU NEED {this.props.caloriesForGoal} DAILY CALORIES IN ORDER TO {this.props.goal.toUpperCase()}</h2>
            <p>This is your key number! Based on the information you entered in the previous steps, we have determined you need this many calories to accomplish your goal. You can always come back to this calculation if your activity level or goal change as this will affect your numbers.</p>
        </div>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
