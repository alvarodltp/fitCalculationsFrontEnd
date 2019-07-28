import React from 'react'
import {Icon} from 'semantic-ui-react'
import { FaChartPie } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";

const DashboardMenu = () => {
  return (
    <div className="dash-menu">
      <div style={{margin: "30px"}}>
        <Icon name="user" />
        <p>Profile</p>
      </div>

      <div style={{margin: "30px"}}>
        <FaChartPie />
        <p>Stats</p>
      </div>

      <div style={{margin: "30px"}}>
        <IoIosCart />
        <p>Programs</p>
      </div>
    </div>
  )
}

export default DashboardMenu
