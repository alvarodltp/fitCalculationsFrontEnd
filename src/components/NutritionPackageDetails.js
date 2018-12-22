import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div id="nutrition-package-intro">
        <h3><FontAwesomeIcon icon="apple-alt" size="1x"/> BMR, Calories, and Macronutrients Calculator</h3>
        <h4>BMR (Basal Metabolic Rate) <FontAwesomeIcon onClick={this.displayBmrInfo} icon="angle-down" size="1x"/></h4>
        {this.state.displayBmrInfo === true ? <p>Lorem ipsum dolor amet intelligentsia man bun jean shorts taxidermy, green juice XOXO flannel irure. XOXO fugiat elit sunt pariatur mustache letterpress in kitsch af laborum dolore neutra marfa.</p> : null}
        <h4>Calories <FontAwesomeIcon onClick={this.displayCaloriesInfo} icon="angle-down" size="1x"/></h4>
        {this.state.displayCaloriesInfo === true ? <p>Lorem ipsum dolor amet intelligentsia man bun jean shorts taxidermy, green juice XOXO flannel irure. XOXO fugiat elit sunt pariatur mustache letterpress in kitsch af laborum dolore neutra marfa.</p> : null}
        <h4>Macronutrients <FontAwesomeIcon onClick={this.displayMacrosInfo} icon="angle-down" size="1x"/></h4>
        {this.state.displayMacrosInfo === true ? <p>Lorem ipsum dolor amet intelligentsia man bun jean shorts taxidermy, green juice XOXO flannel irure. XOXO fugiat elit sunt pariatur mustache letterpress in kitsch af laborum dolore neutra marfa.</p> : null}
      </div>
    );
  }
}

export default NutritionPackageDetails
