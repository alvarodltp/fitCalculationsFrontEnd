import React from 'react'
import {Icon} from 'semantic-ui-react'
import { FaChartPie } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const DashboardMenu = () => {
  return (
    <div className="dash-menu">
      <div>
        <Icon style={{color: "blue"}} name="user" />
        <p style={{fontSize: "10px"}}>Profile</p>
      </div>

      <div>
        <FaChartPie style={{color: "blue"}}/>
        <p style={{fontSize: "10px"}}>Stats</p>
      </div>

      <div>
        <FaLock style={{color: "blue"}}/>
        <p style={{fontSize: "10px"}}>Program</p>
      </div>
    </div>
  )
}

export default DashboardMenu
