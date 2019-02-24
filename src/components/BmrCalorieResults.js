import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div id="congratulations-message">
          <h2 id="title-bcm">CONGRATULATIONS, YOUR RESULTS ARE READY! <Icon style={{color: "#7CFC00"}} name='check' /></h2>
          <p>Your personalized information and detailed email are drafted and ready to be sent. Make sure to enter your name and email in the form below so you can receive even more useful information about how to implement your results.</p>
        </div>
        <Card id="bmr-results">
          <Card.Content>
            <h2 id="bmr-results-text"><Icon style={{color: "yellow", border: "black"}} name="star" size="small" />YOU NEED {this.props.caloriesForGoal} DAILY CALORIES IN ORDER TO {this.props.goal.toUpperCase()}</h2>
            <p>This is your key number! Based on the information you entered in the previous steps, we have determined you need {this.props.caloriesForGoal} calories to accomplish your goal. You can always come back to this calculation if your activity level or goal change as this will affect your numbers.</p>
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
