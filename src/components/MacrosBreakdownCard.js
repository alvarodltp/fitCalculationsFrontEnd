import React from 'react'
import { Card, Button, Form } from 'semantic-ui-react'

class MacrosBreakdownCard extends React.Component {
  constructor(){
    super()
    this.state={
      numberOfMeals: "",
      proteinBreakdown: "",
      caloriesBreakdown: "",
      carbsBreakdown: "",
      fatsBreakdown: ""
    }
  }

  getNumber = (e) => {
    this.setState({
      numberofMeals: e.target.innerText
    })
  }

  calculateBreakdown = () => {
    let proteinBreakdown = this.state.protein
    let caloriesBreakdown = this.state.caloriesForGoal
    let carbsBreakdown = this.state.carbs
    let fatsBreakdown = this.state.fatsBreakdown
    this.setState({
      proteinBreakdown: proteinBreakdown/this.state.numberOfMeals,
      caloriesBreakdown: caloriesBreakdown/this.state.numberOfMeals,
      carbsBreakdown: carbsBreakdown/this.state.numberOfMeals,
      fatsBreakdown: fatsBreakdown/this.state.numberOfMeals
    })
  }

  render(){
    const options = [{ text: '1', value: '1' }, { text: '2', value: '2' }, { text: '3', value: '3' }, { text: '4', value: '4' }, { text: '5', value: '5' }, { text: '6', value: '6' }]
    return(
      <Form id="breakdown-form">
        <Form.Select onChange={this.getNumber} required={true} options={options} name='meals' label='Meals Per Day' placeholder='Select One...' />
        <Button onClick={this.calculateBreakdown}>Calculate Daily Breakdown</Button>
        <h3>{this.state.caloriesBreakdown}</h3>
        <h3>{this.state.proteinBreakdown}</h3>
        <h3>{this.state.carbsBreakdown}</h3>
        <h3>{this.state.fatsBreakdown}</h3>
      </Form>
    )
  }
}

export default MacrosBreakdownCard
