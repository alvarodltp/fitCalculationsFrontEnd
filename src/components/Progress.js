import React from 'react'
import { Progress } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

class ProgressRatio extends React.Component {
  render() {
    return(
      <React.Fragment>
      <div id="progress-bar">
        <Progress value={this.props.stepNumber} total='5' progress='ratio' success />
        <div id="steps-on-bar">
          <p id="steps-text" style={{fontWeight: "bold"}}>1.Your Info <Icon style={{color: "#7CFC00"}} name='check' /></p>
          {this.props.stepNumber >= 2 ? <p id="steps-text" style={{fontWeight: "bold"}}>2. Your Body Type <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">2. Your Body Type</p>}
          {this.props.stepNumber >= 3 ? <p id="steps-text" style={{fontWeight: "bold"}}>3. Your Diet <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">3. Your Diet</p>}
          {this.props.stepNumber >= 4 ? <p id="steps-text" style={{fontWeight: "bold"}}>4. Your Motivation  <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">4. Your Motivation</p>}
          {this.props.stepNumber === 5 ? <p id="steps-text" style={{fontWeight: "bold"}}>5. Your Results  <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">5. Your Results</p>}
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default ProgressRatio
