import React from 'react'
import { Progress } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'


class ProgressExampleProgressRatio extends React.Component {
  render() {
    return(
      <div id="progress-bar">
        <Progress value={this.props.stepNumber} total='3' progress='ratio' success />
        {this.props.stepNumber === 1 ? <h3 id="steps-text">Step 1 - Enter Your Information <Icon style={{color: "#7CFC00"}} name='check' /></h3> : null}
        {this.props.stepNumber === 2 ? <h3 id="steps-text">Step 2 - Select Your Body Type <Icon style={{color: "#7CFC00"}} name='check' /></h3> : null}
        {this.props.stepNumber === 3 ? <h3 id="steps-text">Your Results  <Icon style={{color: "#7CFC00"}} name='check' /></h3> : null}
      </div>
    )
  }
}

export default ProgressExampleProgressRatio
