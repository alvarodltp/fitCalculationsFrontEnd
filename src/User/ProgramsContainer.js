import React from 'react'
import ProgramCard from './ProgramCard'

class ProgramsContainer extends React.Component {
  render(){
    return(
      <React.Fragment>
        <ProgramCard currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} getProgram={this.props.getProgram} currentUserStatsNewCalc={this.props.currentUserStatsNewCalc}/>
      </React.Fragment>
    )
  }
}

export default ProgramsContainer
