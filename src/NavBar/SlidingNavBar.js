
import React from 'react'
import {Image, Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom"
import './NavBar.scss'

class SlidingNavBar extends React.Component {
  render(){
    return(
      <React.Fragment>
        <input type="checkbox" id="navbar-toggle" name="" value=""/>
        <div class="page-wrap">
          <label for="navbar-toggle" class="toggle-button">☰</label>
          <div class="navbar">

            <div class="navbar-logo">
              <Image src="/fit-calculations-logo.png"/>
            </div>

            <ul class="navbar-social">
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </ul>

            <ul class="navbar-menu">
              <Link onClick={this.props.scrollToTop} to='/'>
                <li><a href="#">Home</a></li>
              </Link>
              <Link onClick={this.props.scrollToTop} to='/calculators'>
                <li><a href="#">Calculators</a></li>
              </Link>
            </ul>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SlidingNavBar

// <li><a href="#">About</a></li>
// <li><a href="#">Tools</a></li>
// <li><a href="#">Products</a></li>
// <li><a href="#">Blog</a></li>
