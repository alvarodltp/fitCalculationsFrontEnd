import React from 'react';
import Calories from './Calories';

const DashboardContent = (props) => {
  return (
    <div className="dash-content">
      <Calories {...props}/>
    </div>
  )
}

export default DashboardContent
