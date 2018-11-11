import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
      <div>
        <Card id="bmr-results">
            <h1>BMR</h1>
            <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
            <h1 style={{color: "green"}}>{this.props.bmr}</h1>
            <h1>Maintenance Calories</h1>
            <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
            <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
            <h1>Calories To Accomplish Goal</h1>
            <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
            <h1 style={{color: "green"}}>{this.props.caloriesForGoal}</h1>
            <Button id="button" onClick={this.props.showStepTwo}>Step 2 - Select Body Type <Icon name="right arrow" /></Button>
        </Card>
      </div>
    )
  }
}

export default BmrCalorieResults
