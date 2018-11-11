import React from 'react'
import {Image} from 'semantic-ui-react'


class NavBar extends React.Component {
  render(){
    return(
      <div id="navbar">
        <Image id= "logo" size='small' src='https://www.dropbox.com/s/7yal793dwl4936f/Logo_NUBOD-04.png?raw=1'></Image>
      </div>
    )
  }
}

export default NavBar
