import React from 'react'
import {Form, Image, Icon, Card, Button} from 'semantic-ui-react'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { Link } from "react-router-dom"
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
      completed: false
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
    if(this.state.emailValid === true) {
    fetch(`https://fitcalculations-api.herokuapp.com/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email
        })
      }).then(response =>response.json())
      .then(this.sendEmail())
        swal("Success!", "Your request has been received!", "success")
    } else {

    }
  }

  sendEmail = () => {
    console.log(this.props.email)
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'default_service',
        template_id: 'fit_calculations_lead_magnet',
        user_id: 'user_fFb7UZUUUS7jEGG8aJVSb',
        template_params: {
         "reply_to": "fitcalculations@gmail.com",
         "from_name": "Fit Calculations",
         "name": this.state.name.replace(/^\w/, c => c.toUpperCase()),
         "to_name": this.state.email,
         "calories": this.props.calories,
         "protein": this.props.protein,
         "carbs": this.props.carbs,
         "fats": this.props.fats,
         "bodyType": this.props.bodyType.toUpperCase(),
         "goal": this.props.goal,
         "bmr": this.props.bmr
       }
     })
    })
  }

  render(){
    return(
      <Card id="sign-up-form-card">
          <Form id="sign-up-form-card">
            <h3>LEARN ABOUT YOUR RESULTS WITH A DETAILED PERSONALIZED EBOOK SENT TO YOUR EMAIL</h3>
            <Form.Group widths='equal'>
              <Form.Input onChange={this.getName} width={6} fluid placeholder='NAME' />
              <Form.Input onChange={(e) => {this.getEmail(e); this.validateEmail(e)}} width={6} fluid placeholder='EMAIL' />
            </Form.Group>
            <Link to="/thank-you-bcm">
              <Button id="button-get-email" type='submit'disabled={this.state.submitButtonDisabled} onClick={() => {this.getEvent(); this.saveEmailToUser(); this.activateConfetti(); this.props.scrollToTop()}}>SUBMIT</Button>
            </Link>
          </Form>
        </Card>
    )
  }
}

export default SignUpForm
