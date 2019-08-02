import React from 'react';
import {Line} from 'react-chartjs-2';

class WeightChart extends React.Component {
  render() {
      let dates = this.props.currentUserStats.map(stat => stat.date)
      let weight = this.props.currentUserStats.map(stat => stat.weight_in_lb)
      const data = {
      labels: dates,
      datasets: [{
        label: 'Weight',
        fill: true,
        lineTension: 0.1,
        backgroundColor: ['#2761f1'],
        borderColor: ['#e80aaa'],
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
        data: weight,
        hoverBackgroundColor: ['#e80aaa']
      }]
  }
debugger
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

export default WeightChart
