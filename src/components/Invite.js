import React from 'react'
import {Input, Button, Card, Divider, Image} from 'semantic-ui-react'
import Confetti from 'react-dom-confetti';
import ThankYouBcm from './ThankYouBcm'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

class Invite extends React.Component {
  constructor(){
    super()
    this.state={
      emailValid: "",
      errorMessage: "",
      email: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  validateEmail = (e) => {
    let email = e.target.value
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailValid: re.test(email)
    })
  }

  saveUser = () => {
    if(this.state.emailValid === true) {
    fetch("https://fitcalculations-api.herokuapp.com/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email
        })
      }).then(response => response.json())
      .then(json => {
        this.setState({
          user: json
        })
      }, this.props.history.push('/thank-you'))
    } else {
      this.setState({
        errorMessage: "Please enter a valid email"
      })
    }
  }


  render(){
    return(
      <React.Fragment>
      <BrowserView>
        <div id="invite-page">
          <div id="invite-title-container">
            <h1 id="invite-title">THE SMARTEST AND MOST POWERFUL FITNESS CALCULATOR EVER CREATED</h1>
            <p style={{color: "white"}}>Say good bye to guessing when it comes to getting fit.</p>
          </div>
          <div id="invite-button-input">
            <p>We are launching soon! Be the first to know.</p>
            {this.state.errorMessage ? <p style={{color: "red", fontSize: "12px", marginBottom: "2px"}}>{this.state.errorMessage}</p> : null}
            <Input id="sign-up-input" fluid onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' placeholder='Email Address' size="large"/><br/>
            <Button onClick={this.saveUser} id="invite-button" size="large">Get My Invite</Button>
          </div>
        </div>
        <div style={{marginTop: "30px"}}>
        <h2 style={{fontStyle: "italic", marginBottom: "15px"}}>THIS IS FOR YOU IF</h2>
          <Card id="image-card">
            <Image id="img-invite-page" src={'../calendar.png'} />
            <Card.Content>
              <Card.Header>You are working out but not seeing results</Card.Header>
            </Card.Content>
          </Card>
          <Card id="image-card">
            <Image id="img-invite-page" src={'../food-you-love.png'} />
            <Card.Content>
              <Card.Header>You are tired of following diets that don't work</Card.Header>
            </Card.Content>
          </Card>
          <Card id="image-card">
            <Image id="img-invite-page" src={'../results.png'} />
            <Card.Content>
              <Card.Header>You want to gain muscle or lose weight ASAP</Card.Header>
            </Card.Content>
          </Card>
          <Card id="image-card">
            <Image id="img-invite-page" src={'../burger.png'} />
            <Card.Content>
              <Card.Header>You are tired of restricting yourself from foods you love</Card.Header>
            </Card.Content>
          </Card>
        </div>
        </BrowserView>
        <MobileView>
          <div id="invite-page-mobile">
            <div id="invite-title-container">
              <h1 id="invite-title">THE SMARTEST AND MOST POWERFUL FITNESS CALCULATOR EVER CREATED</h1>
              <p style={{color: "white"}}>Say good bye to guessing when it comes to getting fit.</p>
            </div>
            <div id="invite-button-input">
              <p>We are launching soon! Be the first to know.</p>
              {this.state.errorMessage ? <p style={{color: "red", fontSize: "12px", marginBottom: "2px"}}>{this.state.errorMessage}</p> : null}
              <Input id="sign-up-input" fluid onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' placeholder='Email Address' size="large"/><br/>
              <Button onClick={this.saveUser} id="invite-button" size="large">Get My Invite</Button>
            </div>
          </div>
          <div style={{marginTop: "30px"}}>
          <h2 style={{fontStyle: "italic", marginBottom: "15px"}}>THIS IS FOR YOU IF</h2>
            <Card id="image-card">
              <Image id="img-invite-page" src={'../calendar.png'} />
              <Card.Content>
                <Card.Header>You are working out but not seeing results</Card.Header>
              </Card.Content>
            </Card>
            <Card id="image-card">
              <Image id="img-invite-page" src={'../food-you-love.png'} />
              <Card.Content>
                <Card.Header>You are tired of following diets that don't work</Card.Header>
              </Card.Content>
            </Card>
            <Card id="image-card">
              <Image id="img-invite-page" src={'../results.png'} />
              <Card.Content>
                <Card.Header>You want to gain muscle or lose weight ASAP</Card.Header>
              </Card.Content>
            </Card>
            <Card id="image-card">
              <Image id="img-invite-page" src={'../burger.png'} />
              <Card.Content>
                <Card.Header>You are tired of restricting yourself from foods you love</Card.Header>
              </Card.Content>
            </Card>
          </div>
        </MobileView>
      </React.Fragment>
    )
  }
}

export default Invite
