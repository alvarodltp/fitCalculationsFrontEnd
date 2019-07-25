import React from 'react'
import {Grid, Icon, Button, Image} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

const Nav = (props) => {

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
          <Link to="/calories-and-macros">
            <li>Start Here</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
            <li><a href="https://fitcalculations.trainerize.com/app/logon.aspx" style={{color: "#e80aaa"}}>Login</a></li>
          </ul>
         </nav>
       </header>
    </React.Fragment>
   )
}

export default Nav
