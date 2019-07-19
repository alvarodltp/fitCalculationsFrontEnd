import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const MainHeaderHome = (props) => {
  return(
    <div id="content">
      <div style={{backgroundImage: "url(/header-image.png)", backgroundSize: "cover"}}>
        <div>
        </div>
        <div>
          <h1 style={{fontSize: "50px", color: "white"}}>YOUR TRANSFORMATION STARTS RIGHT HERE.</h1>
        </div>
        <div>
          <span style={{backgroundColor: "#e80aaa", color: "white"}}>Everything you need to crush your health and fitness goals once and for all.</span>
        </div>
        <div>
          <Link to="/calories-and-macros">
            <Button onClick={props.scrollToTop} style={{backgroundColor: "#2761f1", color: "white"}} size="large" type="submit">
               START HERE
            </Button>
          </Link>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MainHeaderHome
