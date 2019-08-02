import React from 'react'
import { Card, Button, Segment, Divider, Input } from 'semantic-ui-react'
class Login extends React.Component {

  constructor(){
    super()
    this.state={
      email: "",
      password: ""
    }
  }

  handleChangeEmail = (e) => {
    let email = e.target.value
    this.setState({
      email: email
    })
  }

  handleChangePassword = (e) => {
    let password = e.target.value
    this.setState({
      password: password
    })
  }

  signUpForm = () => {
    this.props.history.push('/calories-and-macros')
  }

  handleSubmit = (e) => {

    e.preventDefault();
    let data = JSON.stringify({
      email: e.target.parentElement.parentElement.parentElement.querySelector('input[name="email"]').value,
      password: e.target.parentElement.parentElement.parentElement.querySelector('input[name="password"]').value
    });
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    })
      .then(res => {
        if (res.status === 204) {
          alert("login failed");
        } else {
          return res.json();
        }
      })
      .then(json => {
        if(json !== undefined){
          this.props.updateUser(json.user);
          localStorage.setItem("token", json.token);
        }
      })
    };


  render() {
  return (
    <div className="login-container" style={{paddingTop: "100px"}}>
      <div className="login">
        <h2>Login</h2>
        <div className="login-inputs">
          <Input className="login-input" fluid onChange={this.handleChangeEmail} name='email' placeholder='email' />
          <Input className="login-input" fluid onChange={this.handleChangePassword} name='password' type="password" placeholder='password' />
        </div>
        <div className="login-buttons">
          <Button onClick={this.handleSubmit}>
            Login
          </Button>
          <Button onClick={this.signUpForm}>
            Create An Account
          </Button>
        </div>
      </div>
    </div>
    )
  }
}

export default Login
