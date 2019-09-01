import React from 'react'
import { Icon, Button, Input, Checkbox, Form, Divider} from 'semantic-ui-react'
import ReactGA from 'react-ga';

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
            <p>Sign up for a FREE account and get access to your results in your dashboard.</p>
          </div>

          <div id="sign-up-form-card">
            <Form>
             <Form.Group>
              <Input id="sign-up-input" disabled={false} value={this.props.name} fluid onChange={this.props.getName} size='large' maxLength="255" placeholder='Name' /><br/>
              <Input id="sign-up-input" disabled={false} value={this.props.email} fluid onChange={(e) => {this.props.getEmail(e); this.props.validateEmail(e)}} size='large' maxLength="255" placeholder='Email Address'/><br/>
              <Input id="sign-up-input" disabled={false} fluid onChange={(e) => {this.props.getPassword(e); this.props.confirmPassword(e)}} size='large' maxLength="255" placeholder='Password'/><br/>{this.props.passwordMessage === true ? <Icon name="check" size="small" /> : null }
              <Input id="sign-up-input" disabled={false} fluid onChange={(e) => {this.props.getPassword(e); this.props.confirmPassword(e)}} size='large' maxLength="255" placeholder='Confirm Password'/><br/>{this.props.passwordMessage === true ? <Icon name="check" size="small" /> : null }
            </Form.Group>
            <div style={{width: "70%", margin: "0 auto", marginBottom: "20px"}}>
              <Checkbox disabled={true} onChange={this.props.checkCheckbox} checked={this.props.checked} required label='Yes, send me my results and awesome content to stay in shape.' />
            </div>
            {this.props.message != null ? <p style={{fontSize: "12px", color: "red"}}>{this.props.message}</p> : null}
            <Button size="medium" id="button-get-email" type='submit'
            onClick={() => {this.getEvent(); this.props.scrollToTop(); this.props.requiredFieldsMessage()}}>SUBMIT!</Button>
          </Form>
        </div>

      </div>
    </React.Fragment>
    )
  }
}

export default SignUpForm
