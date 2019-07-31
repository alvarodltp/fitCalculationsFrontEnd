import React from 'react'
import {Image, Dropdown, Icon} from 'semantic-ui-react'

class DashboardNav extends React.Component {

  handleClick = (e) => {
    if(e.target.innerText === "Sign Out"){this.props.logOut()}
  }

  render(){
    const trigger = (
      <span>
        <Image avatar /> Welcome, User
      </span>
    )

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'settings', text: 'Settings', icon: 'settings' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return(
      <div className="dash-nav">
        <Dropdown style={{float: "right"}} onChange={this.handleClick} trigger={trigger} options={options} pointing='top left' icon={null} />
      </div>
    )
  }
}

export default DashboardNav
