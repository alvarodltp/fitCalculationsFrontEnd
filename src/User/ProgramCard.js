import React from 'react'
import {Button} from 'semantic-ui-react'

const ProgramCard = (props) => {
  return(
    <React.Fragment>
      <div id="card-dashboard-programs">
        <div style={{padding: "20px"}}>
          <h2>F#ck Diets</h2>
          <p style={{fontSize: "12px"}}>Based on your goal to {props.currentUserStatsNewCalc.goal}, this personalized guide is a good start.</p>
          <h4 style={{color: "green", margin: "14px"}}>Free</h4>
          <Button id="button" onClick={props.getProgram}>Access Now</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProgramCard
