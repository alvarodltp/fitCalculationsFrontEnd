import React from 'react'
import {Image, Icon, Card, Form, Radio, Button} from 'semantic-ui-react'
import MacrosBreakdownResults from './MacrosBreakdownResults'

class MacrosBreakdownForm extends React.Component {
  constructor(){
    super()
    this.state={
      mealsPerDay: "",
      showMacrosBreakdownResults: false
    }
  }

  getMealsPerDay = (e) => {
    this.setState({
      mealsPerDay: e.target.innerText
    }, () => this.calculateMacrosBreakdown())
  }

  calculateMacrosBreakdown = () => {
    let caloriesInMeal = Math.round(this.props.caloriesForGoal / this.state.mealsPerDay)
    let proteinInMeal = Math.round(this.props.protein / this.state.mealsPerDay)
    let carbsInMeal = Math.round(this.props.carbs / this.state.mealsPerDay)
    let fatsInMeal = Math.round(this.props.fats / this.state.mealsPerDay)
    this.setState({
      caloriesInMeal: caloriesInMeal,
      proteinInMeal: proteinInMeal,
      carbsInMeal: carbsInMeal,
      fatsInMeal: fatsInMeal
    }, () => this.showMacrosBreakdownResults())
  }

  showMacrosBreakdownResults = () => {
    this.setState({
      showMacrosBreakdownResults: true
    })
  }

  render(){
    const mealsPerDay = [{key: '2', text: '2', value: '2'}, {key: '3', text: '3', value: '3'}, {key: '4', text: '4', value: '4'}, {key: '5', text: '5', value: '5'}, {key: '6', text: '6', value: '6'}, {key: '7', text: '7', value: '7'}, {key: '8', text: '8', value: '8'}]
    return(
      <React.Fragment>
        <Card id="macros-breakdown-form">
          <Form>
            <Form.Select onChange={this.getMealsPerDay} name='mealsPerDay' label='Select number of meals per day' options={mealsPerDay} placeholder='Meals per day...' />
          </Form>
        </Card>
        {this.state.showMacrosBreakdownResults === true ? <MacrosBreakdownResults mealsPerDay={this.state.mealsPerDay} caloriesInMeal={this.state.caloriesInMeal} proteinInMeal={this.state.proteinInMeal} carbsInMeal={this.state.carbsInMeal} fatsInMeal={this.state.fatsInMeal}/> : null }
      </React.Fragment>
    )
  }
}

export default MacrosBreakdownForm
