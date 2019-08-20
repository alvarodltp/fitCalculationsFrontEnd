import React from 'react';
import Calories from './Calories';
import UserProfile from './UserProfile'
import UserStats from './UserStats'
import NewCalculationContainer from './NewCalculationContainer'
import FoodListContainer from '../Foodlist/FoodListContainer'
import ProgramsContainer from './ProgramsContainer'
import NoDietsProgram from './NoDietsProgram'
import OrderFoodContainer from '../OrderFood/OrderFoodContainer';

const DashboardContent = (props) => {
  return (
    <div className="nested-content">
      { props.page === "Profile" ? <UserProfile currentUserStats={props.currentUserStatsNewCalc} /> : null }
      { props.page === "Stats" ? <UserStats userFoodLists={props.userFoodLists}  currentUserStats={props.currentUserStats} /> : null }
      { props.page === "Start New Calculation" ? <NewCalculationContainer currentUserStatsNewCalc={props.currentUserStatsNewCalc} calculateBmr={props.calculateBmr} handleChangeDropdown={props.handleChangeDropdown} handleChange={props.handleChange} currentUserStats={props.currentUserStats[props.currentUserStats.length - 1]} /> : null }
      { props.page === "Groceries" ? <FoodListContainer currentUserStatsNewCalc={props.currentUserStatsNewCalc}/> : null }
      { props.page === "Programs" ?  <ProgramsContainer getProgram={props.getProgram} currentUserStatsNewCalc={props.currentUserStatsNewCalc}/> : null }
      { props.programSelected != "" && props.page === "Program Display" ? <NoDietsProgram currentUserStatsNewCalc={props.currentUserStatsNewCalc}/> : null }
      { props.page === "Order Food" ? <OrderFoodContainer currentUserStatsNewCalc={props.currentUserStatsNewCalc}/> : null }
    </div>
  )
}

export default DashboardContent
