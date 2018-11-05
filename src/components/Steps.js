import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

class Steps extends React.Component {
  render(){
    return(
      <div id="steps">
        <h2>Step 1 - BMR <Icon disabled name='arrow right' /></h2>
        <h2>Step 2 - Calories <Icon disabled name='arrow right' /></h2>
        <h2>Step 3 - Macros <Icon disabled name='arrow right' /></h2>
      </div>
    )
  }
}

export default Steps
