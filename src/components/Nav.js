import React from 'react'
import {Grid, Icon, Button, Image, Dropdown} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class Nav extends React.Component {

  handleClick = (e) => {
    if(e.target.innerText === "Sign Out"){this.props.logOut()}
    if(e.target.innerText === "Dashboard"){this.props.history.push('/profile')}
  }

  trigger = () => {
    return(
      <span style={{color: "#F1B727"}}>
        Welcome, {this.props.user.name}!
      </span>
    )
  }
  render(){
    const options = [
      { key: 'user', text: 'Dashboard', icon: 'user' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' }
    ]

    return(
      <React.Fragment>
        <header>
          <div className="logo-nav">
          <img className="logo" style={{height: "35px", marginTop: "5px"}} src="fit-calculations-logo.png"/>
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
          <nav>
            <ul>
            <Link to="/">
              <li>Home</li>
            </Link> 
            {this.props.user === null &&
            <Link to="/calories-and-macros">
              <li>Start Here</li>
            </Link> }
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            {this.props.currentUserStats === null &&
              <Link to="/login">
                <li style={{color: "#F1B727"}}>Login</li>
              </Link> }
            </ul>
           {this.props.currentUserStats != null && this.props.user != null ?
           <div>
            <Dropdown style={{paddingLeft: "40px"}} onChange={this.handleClick} trigger={this.trigger()} options={options} pointing='top left' icon={null} />
           </div> : null }
          </nav>
        </header>
     </React.Fragment>
    )
  }
}

export default Nav
