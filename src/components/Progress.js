import React from 'react'
import { Progress } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'


class ProgressRatio extends React.Component {
  render() {
    return(
      <div id="progress-bar">
        <Progress value={this.props.stepNumber} total='3' progress='ratio' success />
        <div id="steps-on-bar">
          <p id="steps-text" style={{fontWeight: "bold"}}>Step 1 - Enter Your Information <Icon style={{color: "#7CFC00"}} name='check' /></p>
          {this.props.stepNumber === 2 || this.props.stepNumber === 3 ? <p id="steps-text" style={{fontWeight: "bold"}}>Step 2 - Select Your Body Type <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">Step 2 - Select Your Body Type</p>}
          {this.props.stepNumber === 3 ? <p id="steps-text" style={{fontWeight: "bold"}}>Step 3 - Your Results  <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">Step 3 - Your Results</p>}
        </div>
      </div> 
    )
  }
}

export default ProgressRatio
