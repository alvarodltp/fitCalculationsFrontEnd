import React from 'react'
import { Icon } from 'semantic-ui-react'

class Steps extends React.Component {
  render(){
    return(
      <div id="steps">
        <h1>Step 1 - Enter Your Information {this.props.caloriesForGoal > 1000 ? <Icon style={{color: "#7CFC00"}} name='check' /> : null}</h1>
        <h1>Step 2 - Get BMR and Calorie Needs</h1>
        <h1>Step 3 - Select Your Body Type</h1>
        <h1>Step 4 - Get Personalized Macronutrients</h1>
      </div>
    )
  }
}

export default Steps
