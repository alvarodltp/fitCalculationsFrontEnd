import React from 'react'
import {Link} from 'react-router-dom'
import {Icon, Button}  from 'semantic-ui-react'
import { FaChartPie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";

const DashboardMenu = (props) => {
  const { activeMenu, menuStyle } = props;
  return (
    <div className="dash-menu"> 
      <div style={activeMenu === "Profile" ? menuStyle : null} className="dash-menu-item" onClick={(e) => {props.handleMenuClick(e, "Profile")}}>
        <Icon className="dash-menu-icon" name="user" />
        <p>Profile</p>
      </div>

      <div style={activeMenu === "Stats" ? menuStyle : null} className="dash-menu-item" onClick={(e) => {props.handleMenuClick(e, "Stats")}}>
        <FaChartPie className="dash-menu-icon"/>
        <p>Stats</p>
      </div>

      <div style={activeMenu === "Programs" ? menuStyle : null} className="dash-menu-item" onClick={(e) => {props.handleMenuClick(e, "Programs")}}>
        <FaLock className="dash-menu-icon"/>
        <p>Programs</p>
      </div>

      <div style={activeMenu === "Groceries" ? menuStyle : null} className="dash-menu-item" onClick={(e) => {props.handleMenuClick(e, "Groceries")}}>
        <FaApple className="dash-menu-icon"/>
        <p>Groceries</p>
      </div>

      <div style={activeMenu === "Order Food" ? menuStyle : null} className="dash-menu-item" onClick={(e) => {props.handleMenuClick(e, "Order Food")}}>
        <FaUtensils className="dash-menu-icon"/>
        <p>Order Food</p>
      </div>

      <div onClick={(e) => {props.handleMenuClick(e, "Start New Calculation")}}>
        <Button className="dash-menu-button">Start New Calculation</Button>
      </div>
    </div>
  )
}

export default DashboardMenu
