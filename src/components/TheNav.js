import React from 'react'
import {Grid} from 'semantic-ui-react'
import { BrowserView } from "react-device-detect";
import { Link } from "react-router-dom"

class TheNav extends React.Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){

     const { activeItem } = this.state

    return(
      <React.Fragment>
        <div style={{margin: "0 auto", color: "white", minHeight: "60px", background: "red", width: "100%", position: "relative", zIndex: "1", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
          <Grid stackable style={{textAlign: "center", width: "100%"}} >
            <Grid.Column>
              <p className="menu">Home</p>
            </Grid.Column>
            <Grid.Column>
              <p className="menu">About</p>
            </Grid.Column>
            <Grid.Column>
              <p className="menu">Tools</p>
            </Grid.Column>
          </Grid>
        </div>
     </React.Fragment>

    )
  }
}

export default TheNav
