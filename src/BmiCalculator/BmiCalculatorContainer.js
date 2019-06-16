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
      inches: [0]
    }
  }

  setPounds = (e) => {
    console.log(e)
    this.setState({
      pounds: e
    })
  }

  setFeet = () => {
    this.setState({
      feet: e
    })
  }

  setInches = () => {
    this.setState({
      inches: e
    })
  }

  render(){
    return(
      <React.Fragment>
        <h1 id="title-bmi">BMI CALCULATOR</h1>
        <Grid style={{width: "100%"}} stackable columns={2}>
          <Grid.Column>
            <BmiForm setPounds={this.setPounds} pounds={this.state.pounds}/>
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
