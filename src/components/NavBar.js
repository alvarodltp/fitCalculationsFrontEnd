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
          <Image  id="logo" src={'../fit-calculations-logo-2'} />
          <Menu style={{float: "left", marginTop: "5px"}} secondary>
            <Link to="/">
              <Menu.Item style={{fontSize: "18px", marginLeft: "100px"}} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/about">
              <Menu.Item style={{fontSize: "18px"}} name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/tools">
              <Menu.Item style={{fontSize: "18px"}} name='Tools' active={activeItem === 'Tools'} onClick={this.handleItemClick} />
            </Link>
            <Link to="/products">
              <Menu.Item
                style={{fontSize: "18px"}}
                name='Products'
                active={activeItem === 'Products'}
                onClick={this.handleItemClick}
              />
            </Link>
            </Menu>
        </div>

     </React.Fragment>




    )
  }
}

export default NavBar
