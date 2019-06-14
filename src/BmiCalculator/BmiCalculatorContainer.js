import React from 'react'
import Pounds from './Pounds'
import Feet from './Feet'
import Inches from './Inches'
import BmiForm from './BmiForm'
import { Grid, Segment } from 'semantic-ui-react'

class BmiCalculatorContainer extends React.Component {
  constructor(){
    super()
    this.state={

    }
  }

  setPounds = (e) => {
    debugger
  }

  render(){
    return(
      <React.Fragment>
        <h1 id="title-bmi">BMI CALCULATOR</h1>
        <BmiForm/>
      </React.Fragment>
    )
  }
}

export default BmiCalculatorContainer
