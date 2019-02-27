import React from 'react';
import {Icon, Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import SimpleSlider from './SimpleSlider'
import Typing from 'react-typing-animation';

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
      <div id="header-main-landing">
      <Typing>
        <h1 style={{paddingTop: "45px", fontSize: "40px", color: "black", fontStyle: "italic"}} >KNOW YOUR FITNESS POTENTIAL</h1>
      </Typing>
      <Divider style={{fontSize: "18px", marginTop: "40px"}} horizontal>
          <Icon style={{color: "red"}} name='hand point down outline' />
            GET YOUR NUMBERS NOW
          <Icon style={{color: "red"}} name='hand point down outline' />
      </Divider>
      <Button size="huge" id="gender-button"><Icon style={{color: "white"}} name='woman' /> I'M A WOMAN</Button>
      <Button size="huge" id="gender-button"><Icon style={{color: "white"}} name='man' /> I'M A MAN</Button>
      </div>
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
            <h4>Calculate your daily calorie needs</h4>
            <p>Go no further and get the exact numbers you need to reach your goal.</p>
          </Card>
          <Card id="benefits-bcm">
            <Icon id="icons" name='food' size="huge" />
            <h4>Calculate your daily macronutrient needs</h4>
            <p>The amount of proteins, carbs, and fats you need to eat based on your calorie results and body type are key for success.</p>
          </Card>
          <Card id="benefits-bcm">
            <Icon id="icons" name='thumbs up' size="huge" />
            <h4>Personalized recommendations based on your information</h4>
            <p>Either you want to get lean and muscular or start your weight loss journey, the key is right here.</p>
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

// <div style={{width: "85%", margin: "0 auto"}}>
//   <SimpleSlider />
// </div>
