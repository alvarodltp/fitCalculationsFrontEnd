import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div id="congratulations-message">
          <h2 id="title-bcm">CONGRATULATIONS, HERE ARE YOUR RESULTS! <Icon style={{color: "#7CFC00"}} name='check' /></h2>
        </div>
        <Card id="bmr-results">
          <Card.Content id="calories-card">
            <h2 id="bmr-results-text">YOUR CALORIES</h2>
            <p>You need {this.props.caloriesForGoal} daily calories in order to {this.props.goal.toUpperCase()}. This is your key number! Based on the information you entered in the previous steps, we have determined you need {this.props.caloriesForGoal} calories to accomplish your goal. You can always come back to this calculation if your activity level or goal change as this will affect your numbers.</p>
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
