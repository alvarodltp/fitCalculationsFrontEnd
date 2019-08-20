import React from 'react';
import {Line} from 'react-chartjs-2';

class CaloriesBarChart extends React.Component {
  render() {
      const data = {
      labels: [
        'BMR',
        'Maintainance Calories',
        'Goal Calories'
      ],
      datasets: [{
        label: 'Calories',
        fill: false,
        lineTension: 0.1,
        backgroundColor: ['#2761f1'],
        borderColor: ['#2761f1'],
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: ['#F1B727','#F1B727','#F1B727'],
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: ['#F1B727','#F1B727','#F1B727'],
        pointHoverBorderColor: ['#F1B727','#F1B727','#F1B727'],
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [this.props.bmr, this.props.caloriesToMaintain, this.props.caloriesForGoal],
        hoverBackgroundColor: ['#F1B727','#F1B727','#F1B727']
      }]
  }

    return (
      <Line
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

export default CaloriesBarChart
