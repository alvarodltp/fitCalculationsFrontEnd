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
      cm: null,
      error: ""
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
    if(this.state.pounds[0] > 0 && this.state.feet[0] > 0 && this.state.inches[0] > 0) {
      let cmFromFeet = (this.state.feet * 30.48).toFixed(2)
      let cmFromInches = (this.state.inches * 2.54).toFixed(2)
      let cm = (Number(cmFromFeet) + Number(cmFromInches))
      let m = (cm/100).toFixed(2)
      let m2 = m * m
      let bmi = (this.state.kilos/m2).toFixed(1)
      this.setState({
        bmi: bmi,
        cm: cm,
        error: ""
      })
    } else {
      this.setState({
        error: "Values must be greater than 0"
      })
    }
  }

  render(){
    return(
      <React.Fragment>
      <div id="third-header-home">
        <Grid style={{width: "101%", paddingBottom: "0px"}} stackable columns={2}>
          <Grid.Row>
            <Grid.Column style={{backgroundColor: "#f0f0f0", minHeight: "400px", paddingTop: "40px"}} width={8}>
              <div className="vertical-center">
                <h1 id="title-bmi">BMI CALCULATOR</h1>
                <p style={{textAlign: "left", width: "80%", margin: "0 auto", marginBottom: "40px"}}>BMI or Body Mass Index is mostly used by doctors and nurses to
                help determine if a person has a weight problem. It gives an
                estimate of total body fat for most people, but it does not work
                well for individuals who have more muscle than the average
                person.
                Even though, it is a good way to have an idea of a person’s weight
                status, it should not always be the final word.</p>
              </div>
            </Grid.Column>
            <Grid.Column  style={{backgroundColor: "#2761f1", minHeight: "400px"}} width={8}>
              <div className="vertical-center" style={{width: "90%"}}>
                <BmiForm style={{margin: "0 auto"}} error={this.state.error} calculateBmi={this.calculateBmi} setPounds={this.setPounds} pounds={this.state.pounds} setFeet={this.setFeet} feet={this.state.feet} setInches={this.setInches} inches={this.state.inches}/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div style={{marginTop: "15px"}}>
        <BmiTable style={{margin: "0 auto"}} bmi={this.state.bmi}/>
      </div>
      </React.Fragment>
    )
  }
}

export default BmiCalculatorContainer
