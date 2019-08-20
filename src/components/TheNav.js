import React from 'react'
import {Grid, Icon, Button, Image} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

const TheNav = (props) => {

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
             <li style={{color: "#F1B727"}}>Log In</li>
           </a>

         </ul>
         <div className="burger">
           <Icon name="bars" size="large"/>
         </div>
       </nav>
    </React.Fragment>
   )
}

export default TheNav
