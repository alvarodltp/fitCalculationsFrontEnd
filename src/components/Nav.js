import React from 'react'
import {Grid, Icon, Image} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class Nav extends React.Component {

  render(){
    return(
        <div id="content">
          <div className="one">Title</div>
          <div className="two">Subtitle</div>
          <div className="three">Button</div>
        </div>
    )
  }
}

export default Nav
