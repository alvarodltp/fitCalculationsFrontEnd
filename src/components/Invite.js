import React from 'react'
import {Input, Button, Card, Divider} from 'semantic-ui-react'
import Confetti from 'react-dom-confetti';
import ThankYouBcm from './ThankYouBcm'

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
        <div id="invite-page">
          <div id="invite-title-container">
            <h1 id="invite-title">THE MOST POWERFUL AND ACCURATE FITNESS CALCULATOR EVER CREATED TO HELP YOU ACHIEVE THE BODY YOU WANT.</h1>
            <p style={{color: "white"}}>In 60 seconds, get information that will last you a lifetime.</p>
          </div>
          <div id="invite-button-input">
            {this.state.errorMessage ? <p style={{color: "red"}}>{this.state.errorMessage}</p> : null}
            <Input id="sign-up-input" fluid onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' placeholder='Email Address' size="large"/><br/>
            <Button style={{width: "80%", marginRight: "0px", marginTop: "0px"}} onClick={() => {this.saveUser(); this.activateConfetti()}} id="invite-button" size="large">Get My Invite</Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Invite
