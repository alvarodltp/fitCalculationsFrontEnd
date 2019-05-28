import React from 'react'
import {Image, Dropdown, Icon, Menu, Input} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
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
          <Image src={'../fit-calculations-logo-2'} id="logo" />
          <Menu style={{float: "left"}} secondary>
            <Menu.Item style={{fontSize: "18px", marginLeft: "100px"}} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
            <Menu.Item style={{fontSize: "18px"}} name='Tools' active={activeItem === 'Tools'} onClick={this.handleItemClick} />
            <Menu.Item
              style={{fontSize: "18px"}}
              name='Products'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </div>

     </React.Fragment>




    )
  }
}

export default NavBar
