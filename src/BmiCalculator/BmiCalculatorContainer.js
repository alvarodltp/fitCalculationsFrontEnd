import React from 'react'
import Pounds from './Pounds'
import Feet from './Feet'
import Inches from './Inches'
import BmiForm from './BmiForm'
import BmiTable from './BmiTable'
import { Grid, Segment } from 'semantic-ui-react'

class BmiCalculatorContainer extends React.Component {
  constructor(){
    super()
    this.state={
      pounds: [0],
      feet: [0],
      inches: [0],
      kilos: null,
      cm: null
    }
  }

  setPounds = (e) => {
    let kilos = e[0] * 0.45
    this.setState({
      pounds: e,
      kilos: kilos
    })
  }

  setFeet = (e) => {
    this.setState({
      feet: e
    })
  }

  setInches = (e) => {
    this.setState({
      inches: e
    })
  }

  calculateBmi = () => {
    let cmFromFeet = (this.state.feet * 30.48).toFixed(2)
    let cmFromInches = (this.state.inches * 2.54).toFixed(2)
    let cm = (Number(cmFromFeet) + Number(cmFromInches))
    let m = (cm/100).toFixed(2)
    let m2 = m * m
    let bmi = (this.state.kilos/m2).toFixed(1)
    console.log(bmi)
    this.setState({
      bmi: bmi,
      cm: cm
    })
  }

  render(){
    return(
      <React.Fragment>
        <h1 id="title-bmi">BMI CALCULATOR</h1>
        <Grid style={{width: "100%"}} stackable columns={2}>
          <Grid.Column>
            <BmiForm calculateBmi={this.calculateBmi} setPounds={this.setPounds} pounds={this.state.pounds} setFeet={this.setFeet} feet={this.state.feet} setInches={this.setInches} inches={this.state.inches}/>
          </Grid.Column>
          <Grid.Column>
            <BmiTable />
          </Grid.Column>
        </Grid>

      </React.Fragment>
    )
  }
}

export default BmiCalculatorContainer
