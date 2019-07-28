import React from 'react'
import {Image, Dropdown, Icon} from 'semantic-ui-react'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

const DashboardNav = () => {
  return (
      <div className="dash-nav">
        <Dropdown trigger={trigger} options={options} />
      </div>
  )
}

export default DashboardNav
