import React from 'react';
import {Icon, Button, Card, Image, Divider, Header} from 'semantic-ui-react';
import Typing from 'react-typing-animation';
import Bounce from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
        <h1 style={{margin: "0 auto", fontSize:"55px", paddingTop: "60px", width: "100%", fontStyle: "italic", color: "white", marginBottom: "30px"}}>Let's Get Started!</h1>
      </Bounce>
        {this.props.mobileDevice === false ?
        <div>
          <Button onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Female" size="large" id="gender-button">I'M A WOMAN</Button>
          <Button onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Male" size="large" id="gender-button">I'M A MAN</Button>
        </div> :
        <div>
          <Button onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Female" size="small" id="gender-button-mobile">I'M A WOMAN</Button>
          <Button onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Male" size="small" id="gender-button-mobile">I'M A MAN</Button>
        </div> }
      </div>

      <div style={{height: "5px", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
      </div>


        <h2 style={{margin: "0 auto", marginBottom: "20px", marginTop: "30px", fontSize: "30px", fontStyle: "italic", width: "80%"}}>LIFE CHANGING INFORMATION IN LESS THAN 60 SECONDS</h2>
        <div>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../calories.png'} />
            <Card.Content>
              <h4>Calculate your calorie needs based on science</h4>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Get the exact numbers you need to reach your goal.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../macros-breakdown.png'} />
            <Card.Content>
              <h4>Perfect breakdown of daily personalized macronutrients</h4>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>The amount of proteins, carbs, and fats you need to eat based on your calorie results and body type are key for success.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../personalized-info.png'} />
            <Card.Content>
              <h4>Powerful recommendations based on your results</h4>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Either you want to get lean and muscular or start your weight loss journey, the key is right here.</Card.Description>
            </Card.Content>
          </Card>
          <Card id="benefits-bcm">
            <Image id="img-motivation" src={'../email-results.png'} />
            <Card.Content>
              <h4>Your results sent right to your inbox so you can apply them and start seeing results fast </h4>
              <Card.Description style={{width: "70%", margin: "0 auto"}}>Health professionals charge hundreds, if not thousands of dollars for information you will get absolutely FREE.</Card.Description>
            </Card.Content>
          </Card>
        </div>

        <h2 id="lets-get-numbers">GET YOUR NUMBERS!</h2>

        <div>
          {this.props.mobileDevice === false ?
          <div>
            <Button style={{width: "30%", marginTop: "20px"}} onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Female" size="large" id="button">I'M A WOMAN</Button>
            <Button style={{width: "30%", marginTop: "20px"}} onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Male" size="large" id="button">I'M A MAN</Button>
          </div> :
          <div>
            <Button style={{width: "45%", marginTop: "20px"}} onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Female" size="small" id="button-mobile">I'M A WOMAN</Button>
            <Button style={{width: "45%", marginTop: "20px"}} onClick={(e) => {this.props.getGenderOnButton(e); this.props.displayForm()}} value="Male" size="small" id="button-mobile">I'M A MAN</Button>
          </div> }

          {this.props.showForm === false ?
          <Fade right>
            <Image src={'../iphone-macros.png'} />
          </Fade> : null }
        </div>
      </React.Fragment>
    );
  }
}

export default NutritionPackageDetails

// <div style={{marginTop: "70px"}}>
//   <h2 id="section-title">THIS CALCULATION IS FOR YOU IF</h2>
// </div>
// <div>
//   <Card id="image-card">
//     <Image id="img-motivation" src={'../calendar.png'} />
//     <Card.Content>
//       <h4>You are working out but not seeing results</h4>
//     </Card.Content>
//   </Card>
//   <Card id="image-card">
//     <Image id="img-motivation" src={'../food-you-love.png'} />
//     <Card.Content>
//       <h4>You are tired of following diets that don't work</h4>
//     </Card.Content>
//   </Card>
//   <Card id="image-card">
//     <Image id="img-motivation" src={'../burger.png'} />
//     <Card.Content>
//       <h4>You are tired of restricting yourself from foods you love</h4>
//     </Card.Content>
//   </Card>
//   <Card id="image-card">
//     <Image id="img-motivation" src={'../results.png'} />
//     <Card.Content>
//       <h4>You want to gain muscle or lose weight ASAP</h4>
//     </Card.Content>
//   </Card>
// </div>
