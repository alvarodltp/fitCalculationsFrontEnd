import React from 'react'
import BmiForm from './BmiForm'

class BmiCalculatorContainer extends React.Component {
  constructor(){
    super()
    this.state={
      pounds: 60,
      kg: {min: 25, max: 150 },
      feet: {min: 3, max: 8 },
      inches: {min: 1, max: 11},
      cm: {min: 50, max: 300}
    }
  }

  setPounds = (e) => {
    debugger
  }

  render(){
    return(
      <React.Fragment>
        <BmiForm pounds={this.state.pounds} setPounds={this.setPounds}/>
      </React.Fragment>
    )
  }
}

export default BmiCalculatorContainer
