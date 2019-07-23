import React from 'react'
import {Grid, Icon, Button, Image} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

const Nav = (props) => {

   return(
     <React.Fragment>
       <nav>
         <div>
           <Image style={{height: "30px"}} src="fit-calculations-logo.png" />
         </div>

         <ul className="nav-links">
           <Link to="/">
             <li>Home</li>
           </Link>

           <Link to="/tools">
             <li>Tools</li>
           </Link>

           <Link to="/blog">
             <li>Blog</li>
           </Link>

           <a href="https://fitcalculations.trainerize.com/app/logon.aspx">
             <li style={{color: "#e80aaa"}}>Log In</li>
           </a>

         </ul>
         <input type="checkbox" className="burger" />
         <Icon name="bars" size="large"/>
       </nav>
    </React.Fragment>
   )
}

export default Nav
