import React from 'react'
import { Button, Container, Header, Form, Icon } from 'semantic-ui-react'

class Signup extends React.Component {

  constructor(){
    super()
    this.state={
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      passwordMessage: "false"
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  confirmPassword = (e) => {
    if(e.target.value === this.state.password){
      this.setState({
        passwordMessage: true
      })
    } else {
      this.setState({
        passwordMessage: false
      })
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = {user: {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      password: this.state.password
    }}
    fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(this.props.updateNewUser)
    this.props.history.push('/profile')
  }

  render() {
    return (
      <div style={{paddingTop: "100px"}}>
        <Container id="signup">
          <div className="ui one column stackable center aligned page grid">
            <div id="column-login" className="column twelve wide">
            <Form onSubmit={this.handleOnSubmit}>
               <Form.Group>
                  <Header as='h2'>Sign Up!</Header>
                  <Form.Input value={this.state.name} id="name" onChange={this.handleChange} fluid name='name' label='Name' placeholder='name' />
                  <Form.Input value={this.state.email} onChange={this.handleChange} fluid name='email' label='Email' placeholder='email' />
                  <Form.Select value={this.state.gender} onChange={this.handleChange} fluid name='gender' label='Gender' placeholder='gender' />
                  <Form.Input value={this.state.password} onChange={this.handleChange} fluid name='password' label='Password' placeholder='password' /> {this.state.passwordMessage === true ? <Icon name="check" size="small" /> : null }
                  <Form.Input value={this.state.confirmPassword} onChange={(e) => {this.handleChange(e); this.confirmPassword(e)}} fluid name='confirmPassword' label='Confirm Password' placeholder='password' color="green"/> {this.state.passwordMessage === true ? <Icon name="check" size="small" /> : null }
                  </Form.Group>
               <br/>
                <Button primary >Sign up</Button>
                <Button onClick={this.loginForm}>Log in</Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
    )
  }
}

export default Signup
