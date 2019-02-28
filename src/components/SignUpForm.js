import React from 'react'
import {Image, Icon, Card, Button, Input, Checkbox, Form, Divider} from 'semantic-ui-react'
import ReactGA from 'react-ga';

class SignUpForm extends React.Component {

  getEvent = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Submit'
    })
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
            <Divider style={{fontSize: "18px", marginTop: "35px"}} horizontal>
              Your Results Are Ready
            </Divider>
            <p>To get your results and a full report on your fitness potential, just let us know where to send it.</p>
          </div>
          <div id="sign-up-form-card">
            <Input id="sign-up-input" required fluid onChange={this.props.getName} size='huge' maxLength="255" placeholder='Name' /><br/>
            <Input id="sign-up-input" required fluid onChange={(e) => {this.props.getEmail(e); this.props.validateEmail(e)}} size='huge' maxLength="255" placeholder='Email Address'/><br/>
            <Checkbox id="checkbox" onChange={this.props.checkCheckbox} required label='Yes, send my results and awesome information to stay in shape.' /><br/><br/>
            <Button style={{fontStyle: "bold"}} size={"huge"} id="button-get-email" type='submit' onClick={(e) => {this.getEvent(); this.props.saveEmailToUser(e); this.props.activateConfetti(); this.props.scrollToTop()}}>Submit!</Button>
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
