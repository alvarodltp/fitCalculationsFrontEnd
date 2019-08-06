import React from 'react'
import CalculationsContainer from '../components/CalculationsContainer'
import NewCalculationForm from './NewCalculationForm'
import { ToastContainer, toast } from 'react-toastify';

class NewCalculationContainer extends React.Component {

  componentDidMount() {
    this.message()
  }

  message = () => {
    return(
      toast.success("Values have been pre-populated with your your latest stats. You can mofify the values as needed.")
    )
  }

  render(){
    return(
      <div className="new-calculation-container">
        <ToastContainer autoClose={false} draggable={true}/>
        <NewCalculationForm style={{margin: "0 auto"}} currentUserStatsNewCalc={this.props.currentUserStatsNewCalc} calculateBmr={this.props.calculateBmr} handleChangeDropdown={this.props.handleChangeDropdown} handleChange={this.props.handleChange} currentUserStats={this.props.currentUserStats} />
      </div>
    )
  }
}

export default NewCalculationContainer
