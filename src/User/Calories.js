import React from 'react';
import {Line} from 'react-chartjs-2';

class Calories extends React.Component {
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
        borderColor: ['white'],
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: ['#e80aaa','#e80aaa','#e80aaa'],
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: ['#e80aaa','#e80aaa','#e80aaa'],
        pointHoverBorderColor: ['#e80aaa','#e80aaa','#e80aaa'],
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [this.props.currentUserStats.bmr, this.props.currentUserStats.calories_to_maintain, this.props.currentUserStats.calories_for_goal],
        hoverBackgroundColor: ['black','black','black']
      }]
  }

    return (

      <Line
         data={data}
         width={100}
         height={100}
         options={{
         maintainAspectRatio: false
         }}
         />

    )
  }
}

export default Calories
