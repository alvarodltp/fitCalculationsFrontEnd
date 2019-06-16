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
        <Pounds setPounds={this.props.setPounds} pounds={this.props.pounds}/>
        <Feet setFeet={this.props.setFeet} feet={this.props.feet}/>
        <Inches setInches={this.props.setInches} inches={this.props.inches}/><br/>
        <Button id="button-mobile" style={{width: "100%"}}>Calculate BMI</Button><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}

export default BmiForm
