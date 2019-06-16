import React from 'react'
import {Segment } from 'semantic-ui-react'

class BmiTable extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }

  render(){
    return(
      <div style={{width: "70%", margin: "0 auto"}}>
        <Segment vertical>Underweight = 18.5 or less</Segment>
        <Segment vertical>Normal weight = 18.5–24.9 </Segment>
        <Segment vertical>Overweight = 25–29.9</Segment>
        <Segment vertical>Obesity = BMI of 30 or greater</Segment>
      </div>
    )
  }
}

export default BmiTable
