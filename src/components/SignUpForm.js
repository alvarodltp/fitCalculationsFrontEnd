import React from 'react'
import {Image, Icon, Card, Button, Input, Checkbox, Form, Divider, Grid} from 'semantic-ui-react'
import ReactGA from 'react-ga';
import Loading from './Loading';

class SignUpForm extends React.Component {

  getEvent = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Submit'
    })
  }

  render(){
    return(
      <React.Fragment>
        <div>
          <div className="sign-up-text">
            <h1>AWESOME JOB!</h1>
            <Divider style={{margin: "0 auto", fontSize: "20px", marginTop: "25px", width: "80%"}} horizontal>
              Your Results Are Ready
            </Divider>
            <p>Sign up for a FREE account to keep track of your calculations or view your results as a guest.</p>
          </div>

        <div id="sign-up-or-not">
          <div>
            <div id="sign-up-form-card">
              <Input id="sign-up-input" disabled={true} value={this.props.name} fluid onChange={this.props.getName} size='large' maxLength="255" placeholder='Name' /><br/>
              <Input id="sign-up-input" disabled={true} value={this.props.email} fluid onChange={(e) => {this.props.getEmail(e); this.props.validateEmail(e)}} size='large' maxLength="255" placeholder='Email Address'/><br/>
              <Input id="sign-up-input" disabled={true} fluid size='large' maxLength="255" placeholder='Password'/><br/>
              <Input id="sign-up-input" disabled={true} fluid size='large' maxLength="255" placeholder='Confirm Password'/><br/>
            </div>
            <div style={{width: "70%", margin: "0 auto", marginBottom: "20px"}}>
              <Checkbox disabled={true} onChange={this.props.checkCheckbox} checked={this.props.checked} required label='Yes, send me my results and awesome content to stay in shape.' />
            </div>
            {this.props.message != null ? <p style={{fontSize: "12px", color: "red"}}>{this.props.message}</p> : null}
              {this.props.safeCalories === true ?
              <Button size="medium" id="button-get-email" type='submit'
              onClick={() => {this.getEvent(); this.props.scrollToTop(); this.props.requiredFieldsMessage()}}
              >SUBMIT!</Button> :
              <Button size="medium" id="button-get-email" type='submit'
              onClick={() => {this.getEvent(); this.props.scrollToTop(); this.props.requiredFieldsMessage()}}>SUBMIT!</Button>}
            </div>

            <div className="vertical-line">
            </div>

            <div className="continue-as-guest">
              <Button id="button-get-email">Continue As A Guest</Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SignUpForm
