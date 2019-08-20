import React from 'react'

const Header = (props) => {
  return(
    <React.Fragment>
      <div className="header-section" style={{ background: "#F1B727"}}>
        <h1 style={{fontSize:"60px", width: "100%", color: "black", paddingTop: "70px"}}>{props.title}</h1>
      </div>
      <div style={{height: "5px", background: "#F1B727"}}>
      </div>
    </React.Fragment>
  )
}

export default Header
