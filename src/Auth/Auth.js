import auth0 from 'auth0-js'
import React from 'react'

class Auth extends React.Component {
  constructor() {
    super()
    this.state={
      auth0: new auth0.WebAuth({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
        redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
        responseType: "token id_token",
        scope: "openid profile email"
      })
    }
  }

  login = () => {
    this.state.auth0.authorize();
  }

  handleAuthentication = () => {
    this.state.auth0.parseHash((err, authResult) => {
      if(authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.props.history.push("/profile");
      } else if (err){
        this.props.history.push("/");
        alert(`Error: ${err.error}. Check the console for further details.`);
        console.log(err)
      }
    })
  }

  setSession = authResult => {
    //set the time that the access token will expire
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  };


  render(){
    return(
      <h1></h1>
    )
  }
}

export default Auth
