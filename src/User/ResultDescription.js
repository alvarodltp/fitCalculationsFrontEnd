import React from 'react'
import WeightDescription from './WeightDescription'
import CaloriesDescription from './CaloriesDescription'
import BmrDescription from './BmrDescription';
import BmiDescription from './BmiDescription';

class ResultDescription extends React.Component {
  render(){
    console.log(this.props.description)
    return(
      <React.Fragment>
        {this.props.description === "weight" && <WeightDescription {...this.props} /> }
        {this.props.description === "calories" && <CaloriesDescription {...this.props} /> }
        {this.props.description === "bmr" && <BmrDescription {...this.props} /> }
        {this.props.description === "bmi" && <BmiDescription {...this.props} /> }
      </React.Fragment>
    )
  }
}

export default ResultDescription