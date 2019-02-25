import React from 'react'
import {Image, Icon, Card, Button, Input, Checkbox, Form} from 'semantic-ui-react'
import swal from 'sweetalert'
import ReactGA from 'react-ga';

class SignUpForm extends React.Component {
  constructor(){
    super()
    this.state={
      name: "",
      email: "",
      emailValid: "",
      submitButtonDisabled: true,
      completed: false,
      checked: false
    }
  }

  activateConfetti = () => {
    this.setState({
      completed: true
    })
  }

  getEvent = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Submit'
    })
  }

  getEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  getName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  checkCheckbox = (e) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  validateEmail = (e) => {
    let email = e.target.value
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailValid: re.test(email),
      submitButtonDisabled: !re.test(email)
    })
  }

  saveEmailToUser = () => {
    let userId = this.props.user["id"]
    if(this.state.emailValid === true && this.state.checked === true) {
    fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name.replace(/^\w/, c => c.toUpperCase()),
          email: this.state.email.toLowerCase()
        })
      }).then(response =>response.json())
      .then(this.props.addOneToStep())
        swal("Success!", "Your results have been sent!", "success")
    } else {
    }
  }

  // sendEmail = () => {
  //   console.log(this.props.email)
  //   fetch("https://api.emailjs.com/api/v1.0/email/send", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       service_id: 'default_service',
  //       template_id: 'fit_calculations_lead_magnet',
  //       user_id: 'user_fFb7UZUUUS7jEGG8aJVSb',
  //       template_params: {
  //        "reply_to": "fitcalculations@gmail.com",
  //        "from_name": "Fit Calculations",
  //        "name": this.state.name.replace(/^\w/, c => c.toUpperCase()),
  //        "to_name": this.state.email,
  //        "calories": this.props.calories,
  //        "protein": this.props.protein,
  //        "carbs": this.props.carbs,
  //        "fats": this.props.fats,
  //        "bodyType": this.props.bodyType.toUpperCase(),
  //        "goal": this.props.goal,
  //        "bmr": this.props.bmr
  //      }
  //    })
  //   })
  // }

  render(){
    return(
      <React.Fragment>
        <div id="sign-up-div">
          <div id="sign-up-text">
            <h1>AWESOME JOB!</h1>
            <h2>Your have finished the calculation process</h2>
            <p>To get your results and a full report on how to implement your numbers, just let us know where to send it.</p>
          </div>
          <div id="sign-up-form-card">
            <Input id="sign-up-input" required fluid onChange={this.getName} size='huge' maxLength="255" placeholder='Name' /><br/>
            <Input id="sign-up-input" required fluid onChange={(e) => {this.getEmail(e); this.validateEmail(e)}} size='huge' maxLength="255" placeholder='Email Address'/><br/>
            <Checkbox onChange={this.checkCheckbox} required label='I agree to the Terms and Conditions' /><br/><br/>
            <Button style={{fontStyle: "bold"}} size={"huge"} id="button-get-email" type='submit' onClick={() => {this.getEvent(); this.saveEmailToUser(); this.activateConfetti(); this.props.scrollToTop()}}>Yes, send me my results!</Button>
          </div>
          <div>
            <p style={{fontSize: "11px", fontColor: "lightgray", marginBottom: "20px"}}>When you sign up, we'll keep you updated with a few emails per week.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignUpForm
