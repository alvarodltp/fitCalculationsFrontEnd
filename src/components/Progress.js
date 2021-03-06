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
          <p style={{fontWeight: "bold"}}>1.Info <Icon style={{color: "#7CFC00"}} name='check' /></p>
          {this.props.stepNumber >= 2 ? <p style={{fontWeight: "bold"}}>2.Body <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">2.Body </p>}
          {this.props.stepNumber >= 3 ? <p style={{fontWeight: "bold"}}>3.Diet <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">3.Diet</p>}
          {this.props.stepNumber >= 4 ? <p style={{fontWeight: "bold"}}>4.Motivation  <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">4.Motivation</p>}
          {this.props.stepNumber === 4 ? <p style={{fontWeight: "bold"}}>5.Results  <Icon style={{color: "#7CFC00"}} name='check' /></p> : <p id="steps-text">5.Results</p>}
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default ProgressRatio
