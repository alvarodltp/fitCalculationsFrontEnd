
import React from 'react'
import {Image, Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom"

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
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>

            <ul class="navbar-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Tools</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Blog</a></li>
            </ul>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SlidingNavBar
