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
        <div id="bcm-for-who">
            <h2 id="section-title">THIS CALCULATION IS FOR YOU IF</h2>
            <h4><Icon id="check-icon" name='check' size="medium" />You want to lose fat</h4>
            <h4><Icon id="check-icon" name='check' size="medium" />You want to gain muscle</h4>
            <h4><Icon id="check-icon" name='check' size="medium" />You want to be healthier overall</h4>
        </div>
        <h2 style={{marginBottom: "40px"}}>LIFE CHANGING INFORMATION IN LESS THAN 60 SECONDS!</h2>
        <div>
          <Card id="benefits-bcm">
            <Icon id="icons" name='heart' size="huge" />
            <h4>Personalized calculation of your daily calorie needs</h4>
            <p>Learn how many calories you need to eat daily to reach your goal.</p>
          </Card>
          <Card id="benefits-bcm">
            <Icon id="icons" name='food' size="huge" />
            <h4>Personalized calculation of your daily macronutrient needs</h4>
            <p>Learn how many grams of proteins, carbs, and fats you need to eat based on your calorie results and body type.</p>
          </Card>
          <Card id="benefits-bcm">
            <Icon id="icons" name='book' size="huge" />
            <h4>All your personalized results sent to your email</h4>
            <p>Health professionals charge hundreds, if not thousands of dollars for information you will get absolutely FREE.</p>
          </Card>
        </div>
        <div>
          <h2 id="lets-get-numbers">LET'S GET YOUR NUMBERS!</h2>
        </div>
      </div>

      </React.Fragment>
    );
  }
}

export default NutritionPackageDetails
