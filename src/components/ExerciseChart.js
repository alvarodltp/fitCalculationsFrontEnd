import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Popup } from 'semantic-ui-react'

class ExerciseChart extends React.Component {
  render() {
      const data = {
      labels: [
        'BMR',
        'Maintainance Calories',
        'Goal Calories'
      ],
      datasets: [{
        label: 'Bmr and Calories Results',
        data: [this.props.bmr, this.props.caloriesToMaintain, this.props.caloriesForGoal],
        backgroundColor: ['#2761f1','#F1B727','#D3D3D3'],
        hoverBackgroundColor: ['#2761f1','#F1B727','#D3D3D3']
      }]
    }

    return (
      <Bar
         data={data}
         width={300}
         height={300}
         options={{
         maintainAspectRatio: false
         }}
         />
    )
  }
}

export default ExerciseChart
