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
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="medium" />You want to lose weight</h4>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="medium" />You want to gain muscle</h4>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="medium" />You want to be healthier</h4>
            <h4><Icon style={{color: "#7CFC00"}} name='check' size="medium" />You want to know what works for you</h4>
        </div>
        <h2 style={{marginBottom: "40px"}}>LIFE CHANGING INFORMATION IN LESS THAN 60 SECONDS</h2>
        <div>
          <div id="benefits-bcm">
            <Icon id="icons" name='heart' size="huge" />
            <h4>Personalized calculation of your daily needed calories</h4>
            <p>Learn how many calories you need to eat daily to reach your goal.</p>
          </div>
          <div id="benefits-bcm">
            <Icon id="icons" name='food' size="huge" />
            <h4>Personalized calculations of your daily needed macros</h4>
            <p>Learn how proteins, carbs, and fats need to divided based on your calorie results.</p>
          </div>
          <div id="benefits-bcm">
            <Icon id="icons" name='book' size="huge" />
            <h4>Personalized ebook with your results</h4>
            <p>We want you to succeed! Get an ebook sent to your email with a detailed summary of your results.</p>
          </div>
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
