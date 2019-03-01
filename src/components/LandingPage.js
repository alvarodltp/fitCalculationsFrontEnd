import React from 'react'
import {Image, Icon, Button, Card} from 'semantic-ui-react'

class LandingPage extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div style={{width: "80%", margin: "0 auto", marginTop: "40px"}}>
        <h1 style={{fontSize:"40px"}}>You're one step from getting in the best shape of your life</h1>
        <h2 style={{color: "blue"}}>INTRODUCING THE STEP-BY-STEP FORMULA I USED TO BUILD THE BODY OF MY DREAMS.</h2>
        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", fontSize: "20px", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the secrets that Hollywood stars, athletes and fitness models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a program that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to sidestep the internet's endless parade of hollow tactics and finally learn tested strategies to {this.props.goal.toLowerCase()} without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{fontSize: "20px", width: "80%", margin:"0 auto", marginBottom: "50px"}}>If you are, then I’m excited to announce A NEW PROGRAM THAT’S YEARS IN THE MAKING.</p>
        <Image style={{width: "250px", margin: "0 auto", marginBottom: "50px"}}src={'../ebook.png'} />
        <Button style={{background: "#2761f1", color: "white", margin: "0 auto", marginBottom: "30px"}} content='START YOUR JOURNEY TODAY' size="huge" icon='angle double right' labelPosition='right' />
        <div id="landing-main-benefits">
        <h1 style={{fontSize:"40px"}}>A few things you get...</h1><br/>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>DETAILED RESULTS</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PERSONAL MACRO STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>REFEED STRATEGIES</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div id="landing-main-benefits">
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>LIFESTYLE GUIDE</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>GROCERY SHOPPING LIST</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PROVEN MEAL PLAN EXAMPLES</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <h1 style={{fontSize:"40px"}}>UYFP Case Studies</h1><br/>
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
          <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular />
        </div>
      </React.Fragment>
    )
  }
}

export default LandingPage
