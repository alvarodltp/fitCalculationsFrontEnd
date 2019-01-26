import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class BmrCalorieResults extends React.Component {
  render(){
    return(
      <div>
        <Card id="bmr-results">
            <Card.Description></Card.Description>
            <h3>Your BMR (Basal Metabolic Rate) is</h3><h3 style={{color: "green", fontStyle: "italic"}}>{this.props.bmr}</h3>
            <h3>and you need</h3><h3 style={{color: "green", fontStyle: "italic"}}>{this.props.caloriesForGoal}</h3><h3>daily calories in order to {this.props.goal}</h3>
            <Card.Description></Card.Description>
        </Card>
      </div>
    )
  }
}

export default BmrCalorieResults

// <h1>Maintenance Calories</h1>
// <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
// <h1 style={{color: "green"}}>{this.props.caloriesToMaintain}</h1>
