import React from 'react'
import './HomePage.scss'
import { Link } from 'react-router-dom'

const MainHeaderHome = () => {
  return(
    <React.Fragment>
      <div className="header-home">
        <div className="text-box">
          <h1 className="header-primary">
            <span className="header-primary-main">too busy?</span>
            <span className="header-primary-sub">no longer an excuse</span>
          </h1>
          <Link to='/calories-and-macros'>
            <a href="#" className="btn btn-white btn-animated">Take The Assesment</a>
          </Link>  
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainHeaderHome