import React from 'react';
import {Icon} from 'semantic-ui-react';

class NutritionPackageDetails extends React.Component {
  constructor(){
    super()
    this.state={
      displayBmrInfo: false,
      displayMacrosInfo: false,
      displayCaloriesInfo: false
    }
  }

  displayBmrInfo = () => {
    this.setState({
      displayBmrInfo: !this.state.displayBmrInfo
    })
  }

  displayMacrosInfo = () => {
    this.setState({
      displayMacrosInfo: !this.state.displayMacrosInfo
    })
  }

  displayCaloriesInfo = () => {
    this.setState({
      displayCaloriesInfo: !this.state.displayCaloriesInfo
    })
  }


  render() {
    return (
      <React.Fragment>
      <div id="nutrition-package-intro">
        <h2 id="section-title">BMR, Calories, and Macronutrients Calculator</h2>
      </div>
      <div id="nutrition-package-intro">
      <h3 id="section-title"><Icon onClick={this.displayBmrInfo} name="angle right" size="mini"/> Who is this calculation for? </h3>
        <p>This calculation is great for anyone interested in having a better understanding about their bodies in order to lose weight and/or gain muscle effectively.
        The personalized result provided at the end of the calculation is a great tool to use in order to accomplish your fitness and health goals once and for all.</p>
      </div>
      </React.Fragment>
    );
  }
}

export default NutritionPackageDetails
