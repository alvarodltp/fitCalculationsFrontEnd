import React from 'react'

const Header = (props) => {
  return(
    <React.Fragment>
      <div className="header-section" style={{ background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
        <h1 style={{fontSize:"60px", width: "100%", color: "black", paddingTop: "60px"}}>{props.title}</h1>
      </div>
      <div style={{height: "5px", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
      </div>
    </React.Fragment>
  )
}

export default Header
