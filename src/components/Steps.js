import React from 'react'
import { Icon } from 'semantic-ui-react'

class Steps extends React.Component {
  render(){
    return(
      <div id="steps">
        <h3>Step 1 - BMR & Caloric Needs <Icon disabled name='arrow right' /></h3>
        <h3>Step 2 - Personalized Macronutrients <Icon disabled name='arrow right' /></h3>
      </div>
    )
  }
}

export default Steps
