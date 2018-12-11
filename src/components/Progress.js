import React from 'react'
import { Progress } from 'semantic-ui-react'

class ProgressExampleProgressRatio extends React.Component {
  render() {
    return(
      <div id="progress-bar">
        <Progress value={this.props.stepNumber} total='3' progress='ratio' success />
      </div>
    )
  }
}

export default ProgressExampleProgressRatio
