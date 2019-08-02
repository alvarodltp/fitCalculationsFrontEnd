import React from 'react'
import {Icon} from 'semantic-ui-react'
import { FaChartPie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const DashboardMenu = (props) => {
  return (
    <div className="dash-menu">
      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <Icon style={{color: "blue", display: "inline"}} name="user" />
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Profile</p>
      </div>

      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <FaChartPie  style={{color: "blue", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Stats</p>
      </div>

      <div style={{textAlign: "left"}}>
        <FaLock style={{color: "blue", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Programs</p>
      </div>
    </div>
  )
}

export default DashboardMenu
