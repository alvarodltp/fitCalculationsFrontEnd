import React from 'react'
import {Image, Icon} from 'semantic-ui-react'

class LandingPage extends React.Component {

  render(){
    return(
      <React.Fragment>
        <h1>SO WHAT'S NEXT, {this.props.name.toUpperCase()}?</h1>
      </React.Fragment>
    )
  }
}

export default LandingPage
