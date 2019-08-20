import React from 'react'
import {Link} from 'react-router-dom'
import {Icon, Button}  from 'semantic-ui-react'
import { FaChartPie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

const DashboardMenu = (props) => {
  return (
    <div className="dash-menu">
      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <Icon style={{color: "#F1B727", display: "inline"}} name="user" />
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Profile</p>
      </div>

      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <FaChartPie  style={{color: "#F1B727", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Stats</p>
      </div>

      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <FaLock style={{color: "#F1B727", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Programs</p>
      </div>

      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <FaApple style={{color: "#F1B727", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Groceries</p>
      </div>

      <div style={{textAlign: "left"}} onClick={props.handleMenuClick}>
        <FaUtensils style={{color: "#F1B727", display: "inline"}}/>
        <p style={{fontSize: "14px", display: "inline", padding: "10px"}}>Order Food</p>
      </div>

      <div onClick={props.handleMenuClick}>
        <Button style={{color: "white", background: "#F1B727"}}>Start New Calculation</Button>
      </div>
    </div>
  )
}

export default DashboardMenu
