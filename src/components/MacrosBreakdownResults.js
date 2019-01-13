import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class MacrosBreakdownResults extends React.Component {
  render(){
    return(
      <div>
        <Card id="bmr-results">
            <Card.Description></Card.Description>
            <h3>Based on your selection of {this.props.mealsPerDay} meals per day, here is your macronutrient breakdown.</h3>
            <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.caloriesInMeal} calories per meal.</h3>
            <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.proteinInMeal} grams of protein per meal.</h3>
            <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.carbsInMeal} grams of carbs per meal.</h3>
            <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.fatsInMeal} grams of fats per meal.</h3>
            <Card.Description></Card.Description>
        </Card>
      </div>
    )
  }
}

export default MacrosBreakdownResults
