import React from 'react'
import {Image, Dropdown, Icon} from 'semantic-ui-react'

class DashboardNav extends React.Component {
  render(){
    const trigger = (
      <span>
        <Icon name='user' /> Hello, {this.props.user.name}
      </span>
    )

    const options = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>{this.props.user.name}</strong>
          </span>
        ),
        disabled: true,
      },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out' },
    ]

    return(
      <div className="dash-nav">
        <Dropdown trigger={trigger} options={options} />
        <p onClick={this.props.logOut}>Log Out</p>
      </div>
    )
  }
}

export default DashboardNav
