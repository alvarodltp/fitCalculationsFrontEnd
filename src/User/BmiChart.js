import React from 'react';
import {Bar} from 'react-chartjs-2';

class BmiChart extends React.Component {
  render() {
      let dates = this.props.currentUserStats.map(stat => stat.date)
      let bmi = this.props.currentUserStats.map(stat => stat.bmi)
      const data = {
      labels: dates,
      datasets: [{
        label: 'Bmi',
        fill: true,
        lineTension: 0.1,
        backgroundColor: Array(bmi.length).fill('#2761f1'),
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
        data: bmi,
        hoverBackgroundColor: Array(bmi.length).fill('#e80aaa')
      }]
  }
debugger
    return (

      <Bar
         data={data}
         width={200}
         height={200}
         options={{
         maintainAspectRatio: false
         }}
         />

    )
  }
}

export default BmiChart
