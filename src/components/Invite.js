import React from 'react'
import {Input, Button, Card, Divider} from 'semantic-ui-react'

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
        email: ""
        })
      }).then(response => response.json())
      .then(json => {
        this.setState({
          user: json
        })
      })
    } else {
      this.setState({
        errorMessage: "Please enter a valid email"
      })
    }
  }


  render(){
    return(
      <div id="invite-page">
        <div id="invite-title-container">
          <h1 id="invite-title">THE MOST POWERFUL FITNESS CALCULATOR TO FINALLY GET THE BODY YOU WANT</h1>
        </div>
        <Card id="invite-button-input">
          {this.state.errorMessage ? <p style={{color: "red"}}>{this.state.errorMessage}</p> : null}
          <Input style={{width: "50%"}} onChange={(e) => {this.handleChange(e); this.validateEmail(e)}} name='email' type='text' placeholder='Email...' size="large"/><br/>
          <Button onClick={this.saveUser} id="invite-button" size="large">Get My Invite</Button>
        </Card>
      </div>
    )
  }
}

export default Invite
