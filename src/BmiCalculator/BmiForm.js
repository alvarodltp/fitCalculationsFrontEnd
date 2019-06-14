import React from 'react'
import Pounds from './Pounds'
import Feet from './Feet'
import Inches from './Inches'
import './BmiCalculator.css'
import {Button} from 'semantic-ui-react'

class BmiForm extends React.Component {
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
      <div style={{width: "70%", margin: "0 auto"}}>
        <Pounds setPounds={this.setPounds}/>
        <Feet />
        <Inches /><br/>
        <Button id="button-mobile" style={{width: "100%"}}>Calculate BMI</Button>
      </div>
    )
  }
}

export default BmiForm
