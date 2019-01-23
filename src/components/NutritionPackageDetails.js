import React from 'react';
import {Icon, Button, Card} from 'semantic-ui-react';

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
        <h1 id="section-title">BMR, Calories, and Macronutrients Calculator</h1>
      </div>
      <div id="nutrition-package-intro">
        <h1 id="section-title">This Calculation Is For You If...</h1>
        <div id="bcm-for-who">
          <Card style={{boxShadow: "none"}}>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="large" />YOU WANT TO LOSE WEIGHT</h4>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="large" />YOU WANT TO GAIN WEIGHT</h4>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="large" />YOU WANT TO BE HEALTHIER</h4>
          </Card>
        </div>
        <div id="benefits-calorie-calculator">
          <div>
            <Icon style={{color: "#7CFC00"}} name='heart' size="huge" />
            <h3>Learn Your Calories</h3>
          </div>
          <div>
            <Icon style={{color: "#7CFC00"}} name='food' size="huge" />
            <h3>Learn Your Macros</h3>
          </div>
          <div>
            <Icon style={{color: "#7CFC00"}} name='book' size="huge" />
            <h3>Understand Your Results</h3>
          </div>
        </div>
        <Button id="button-start-calculation" onClick={this.props.showBcmForm}>START CALCULATION</Button>
      </div>

      </React.Fragment>
    );
  }
}

export default NutritionPackageDetails
