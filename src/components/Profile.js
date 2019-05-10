import React, { Component } from 'react';

class Profile extends Component {

  componentDidMount(){
    //handle authentication if expected value are in url
    if(/access_token|id_token|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL");
    }
  }


  render(){
    return(
      <h1>Profile Page</h1>
    )
  }
}

export default Profile