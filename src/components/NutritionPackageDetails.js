import React from 'react';
import {Icon, Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import SimpleSlider from './SimpleSlider'
import Typing from 'react-typing-animation';
import Bounce from 'react-reveal/Zoom';

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
      <Bounce left>
        <h1 style={{paddingTop: "45px", fontSize: "40px", color: "white", fontStyle: "italic"}} >UNLEASH YOUR FITNESS POTENTIAL</h1>
      </Bounce>
        <Divider style={{fontSize: "18px", marginTop: "40px"}} horizontal>
           START YOUR TRANSFORMATION NOW
        </Divider>
        <Button onClick={this.props.getGenderOnButton} value="Female" size="huge" id="gender-button">I'M A WOMAN</Button>
        <Button onClick={this.props.getGenderOnButton} value="Male" size="huge" id="gender-button">I'M A MAN</Button>
      </div>
      <div id="nutrition-package-intro">
          <h2 id="section-title">THIS CALCULATION IS FOR YOU IF</h2>
      </div>
      <div>
        <Card id="image-card">
          <Image id="img-motivation" src={'../food-you-love.png'} />
          <Card.Content>
            <Card.Header>You are tired of following diets that don't work</Card.Header>
          </Card.Content>
        </Card>
        <Card id="image-card">
          <Image id="img-motivation" src={'../burger.png'} />
          <Card.Content>
            <Card.Header>You are tired of restricting yourself from foods you love</Card.Header>
          </Card.Content>
        </Card>
        <Card id="image-card">
          <Image id="img-motivation" src={'../calendar.png'} />
          <Card.Content>
            <Card.Header>You are working out but not seeing results</Card.Header>
          </Card.Content>
        </Card>
        <Card id="image-card">
          <Image id="img-motivation" src={'../results.png'} />
          <Card.Content>
            <Card.Header>You want to gain muscle or lose weight ASAP</Card.Header>
          </Card.Content>
        </Card>
      </div>
        <h2 style={{margin: "0 auto", marginBottom: "20px", marginTop: "30px", fontSize: "30px", fontStyle: "italic", width: "80%"}}>LIFE CHANGING INFORMATION IN LESS THAN 60 SECONDS</h2>
        <div>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../calories.png'} />
            <Card.Content>
              <Card.Header>Calculate your calorie needs based on science</Card.Header>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Go no further and get the exact numbers you need to reach your goal.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../macros-breakdown.png'} />
            <Card.Content>
              <Card.Header>Perfect breakdown of daily personalized macronutrients</Card.Header>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>The amount of proteins, carbs, and fats you need to eat based on your calorie results and body type are key for success.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../personalized-info.png'} />
            <Card.Content>
              <Card.Header>Powerfull recommendations based on your results</Card.Header>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Either you want to get lean and muscular or start your weight loss journey, the key is right here.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../email-results.png'} />
            <Card.Content>
              <Card.Header>A detailed report sent right to your inbox so you can start seeing results fast </Card.Header>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Health professionals charge hundreds, if not thousands of dollars for information you will get absolutely FREE.</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div>
          <h2 id="lets-get-numbers">GET YOUR NUMBERS!</h2>
          <Button onClick={this.props.getGenderOnButton} value="Female" size="huge" id="gender-button">I'M A WOMAN</Button>
          <Button onClick={this.props.getGenderOnButton} value="Male" size="huge" id="gender-button">I'M A MAN</Button><br/><br/>
        </div>

      </React.Fragment>
    );
  }
}

export default NutritionPackageDetails

// <div style={{width: "85%", margin: "0 auto"}}>
//   <SimpleSlider />
// </div>
