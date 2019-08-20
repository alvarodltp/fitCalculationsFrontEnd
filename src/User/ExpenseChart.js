import React from 'react';
import {Line} from 'react-chartjs-2';

class ExpenseChart extends React.Component {
  render() {
      let dates = this.props.userFoodLists.map(list => list.date);
      let expense = this.props.userFoodLists.map(list => list.total_cost);
      const data = {
      labels: dates,
      datasets: [{
        label: 'Expense',
        fill: true,
        lineTension: 0.1,
        backgroundColor: ['#2761f1'],
        borderColor: ['#F1B727'],
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
        data: expense,
        hoverBackgroundColor: ['#F1B727']
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

export default ExpenseChart