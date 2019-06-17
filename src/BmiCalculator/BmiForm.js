import React from 'react'
import Pounds from './Pounds'
import Feet from './Feet'
import Inches from './Inches'
import './BmiCalculator.css'
import {Button} from 'semantic-ui-react'

class BmiForm extends React.Component {
  render(){
    return(
      <div style={{width: "70%", margin: "0 auto", marginBottom: "20px"}}>
        <Pounds setPounds={this.props.setPounds} pounds={this.props.pounds}/>
        <Feet setFeet={this.props.setFeet} feet={this.props.feet}/>
        <Inches setInches={this.props.setInches} inches={this.props.inches}/><br/>
        {this.props.error !== "" ? <p style={{color: "red", fontSize: "10px", textAlign: "center"}}>{this.props.error}</p> : null}
        <Button onClick={this.props.calculateBmi} id="button-mobile" style={{width: "100%"}}>Calculate BMI</Button>
      </div>
    )
  }
}

export default BmiForm
