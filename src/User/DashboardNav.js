import React from 'react'
import {Image, Dropdown, Icon} from 'semantic-ui-react'
import { FaHeart } from "react-icons/fa";

class DashboardNav extends React.Component {

  handleClick = (e) => {
    if(e.target.innerText === "Sign Out"){this.props.logOut()}
  }

  render(){
    const trigger = (
      <span>
        <FaHeart/> Welcome, {this.props.currentUserStats.user.name}
      </span>
    )

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'settings', text: 'Settings', icon: 'settings' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return(
      <div className="dash-nav">
        <Dropdown style={{paddingRight: "30px"}} onChange={this.handleClick} trigger={trigger} options={options} pointing='top left' icon={null} />
      </div>
    )
  }
}

export default DashboardNav
