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
      <div>
        {this.props.bmi ? <h2>Your BMI is {this.props.bmi}</h2> : null }
        {this.props.bmi <= 18.5 ? <Segment style={{color: "orange"}} vertical>Underweight = 18.5 or less</Segment> : <Segment vertical>Underweight = 18.5 or less</Segment> }
        {this.props.bmi > 18.5 && this.props.bmi <= 24.9 ? <Segment vertical style={{color: "green"}}>Normal weight = 18.5–24.9 </Segment> : <Segment vertical>Normal weight = 18.5–24.9 </Segment> }
        {this.props.bmi  >= 25 && this.props.bmi <= 29.9 ? <Segment style={{color: "orange"}} vertical>Overweight = 25–29.9</Segment> : <Segment vertical>Overweight = 25–29.9</Segment> }
        {this.props.bmi >= 30 ? <Segment style={{color: "red"}} vertical>Obesity = BMI of 30 or greater</Segment> : <Segment vertical>Obesity = BMI of 30 or greater</Segment> }
      </div>
    )
  }
}

export default BmiTable
