import React from 'react'
import {Image, Dropdown, Icon, Menu, Input} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class NavBar extends React.Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){

     const { activeItem } = this.state

    return(
      <React.Fragment>
        <div id="navbar">
          <Link to="/">
            <Image id="logo" src={'../fit-calculations-logo-2'} />
          </Link>
      </div>
     </React.Fragment>

    )
  }
}

export default NavBar
