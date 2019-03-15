import React from 'react'
import {Image, Grid, Icon} from 'semantic-ui-react'
import ShareButtons from './ShareButtons'
import { Link } from "react-router-dom"
import Slide from 'react-reveal/Slide';

class PersonalStats extends React.Component {

  render(){
    return(
      <Slide left>
        <React.Fragment>
          <div>
            {this.props.motivationToGetFit === "Health Reasons" ?
            <div id="intro-results">
              <p style={{fontSize: "15px", textAlign: "left"}}>Alvaro, that's awesome you want to "goal" and most importantly, that you want to improve your motivation to get fit! It really isn't rocket science
                and you are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body and health you deserve. Read your results fully and let us know if you have any questions!</p>
            </div> :
            <div id="intro-results">
              <p style={{textAlign: "left", fontSize: "15px"}}>Alvaro, that's awesome you have a "motivation coming up! It isn't rocket science to goal
                 and get the body you want. You are closer to your goals than what you think. You have super powerful information available to you now, and it is up to you to take action to get the body you deserve. Read your results fully and let us know if you have any questions!</p>
            </div> }
            <Grid style={{margin: "0 auto", width: "60%"}} stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={8}>
                  <h3>Current Weight: 123lb</h3>
                  <h3>Body Type:</h3>
                  <h3>Height:</h3>
                  <h3>Age:</h3>
                  <h3>Gender</h3>
                </Grid.Column>
                <Grid.Column width={8}>
                  <h3>Diet Type:</h3>
                  <h3>Activity Level:</h3>
                  <h3>Goal:</h3>
                  <h3>Bmr:</h3>
                  <h3>Bmi:</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </React.Fragment>
      </Slide>
    )
  }
}

export default PersonalStats
