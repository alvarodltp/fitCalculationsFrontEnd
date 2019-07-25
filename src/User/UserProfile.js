import React from 'react'

class UserProfile extends React.Component {

  constructor(){
    super()
    this.state={

    }
  }

  render() {
    return (
      <div style={{paddingTop: "100px"}}>
        <h1>User Profile</h1>
        <h4>{this.props.user.name}</h4>
      </div>
    )
  }
}

export default UserProfile
