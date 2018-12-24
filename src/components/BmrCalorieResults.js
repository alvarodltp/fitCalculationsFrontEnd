import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
      <div>
        <Card id="bmr-results">
            <h1>BMR(Basal Metabolic Rate)</h1>
            <Card.Description></Card.Description>
            <h1 style={{color: "green"}}>{this.props.bmr}</h1>
            <h1>Calories To Accomplish Goal</h1>
            <Card.Description></Card.Description>
            <h1 style={{color: "green"}}>{this.props.caloriesForGoal}</h1>
        </Card>
      </div>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
