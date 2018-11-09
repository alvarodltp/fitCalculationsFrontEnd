import React from 'react'
import { Icon } from 'semantic-ui-react'

class Steps extends React.Component {
  render(){
    return(
      <div id="steps">
        <h3>Step 1 - BMR & Caloric Needs {this.props.caloriesForGoal != null ? <Icon style={{color: "#7CFC00"}} name='check' /> : null}</h3>
        <h3>Step 2 - Personalized Macros</h3>
      </div>
    )
  }
}

export default Steps
