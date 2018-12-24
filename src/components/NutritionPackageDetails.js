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
        {this.state.displayBmrInfo === true ? <p>Basal Metabolic Rate is the number of calories required to keep your body functioning at rest. In other words, it is the number of calories you would burn if you were inactive and stayed in bed all day.  It is important to know your BMR as it is also known as your body’s metabolism. The more exercise you do, the higher your BMR will be. We use the original Harris Benedict Formula to calculate your daily calorie expenditure based on your activity level. </p> : null}
        <h4>Calories <FontAwesomeIcon onClick={this.displayCaloriesInfo} icon="angle-down" size="1x"/></h4>
        {this.state.displayCaloriesInfo === true ? <p>In order to calculate your personalized calories, we run a formula that uses your  BMR(Basal Metabolic Rate), your activity level, and your goal. Based on these values, we are able to determine the amount of daily calories you will need in order to accomplish your goal.</p> : null}
        <h4>Macronutrients <FontAwesomeIcon onClick={this.displayMacrosInfo} icon="angle-down" size="1x"/></h4>
        {this.state.displayMacrosInfo === true ? <p>Your personalized macronutrients are calculated based on the calories you need to accomplish your goal as well as your body type.  For ectomorphs, 25% of calories should come from protein, 55% of calories from carbohydrates, and 20% of calories from fats. For mesomorphs, 30% of calories should come from proteins, 40% of calories from carbohydrates, and 30% of calories from fats. Finally, for endomorphs 35% of calories should come from proteins, 25% of calories from carbs, and 40% of calories from fats.</p> : null}
      </div>
    );
  }
}

export default NutritionPackageDetails
