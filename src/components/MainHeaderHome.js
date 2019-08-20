import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image } from 'semantic-ui-react'

const MainHeaderHome = (props) => {
  return(
    <div id="content">
      <div className="maintitle-div">
        <h1 className="maintitle">HERE AT FIT CALCULATIONS WE DO ONE THING</h1>
        <h1 className="maintitle-two">EXTREMELY WELL</h1>
      </div>
      <div className="gain">
        <Image style={{background: "white", padding: "30px", margin: "0 auto", opacity: "0.7"}} src="results.png" circular /><br/>
        <span style={{color: "white", background: "#F1B727", margin: "0 auto", fontSize: "18px"}}>We Help You Get Lean, Strong, And Healthy</span>
      </div>
    </div>
  )
}

export default MainHeaderHome
