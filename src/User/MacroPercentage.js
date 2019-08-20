import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Popup, Grid, Icon } from 'semantic-ui-react'

class MacroPercentage extends React.Component {
  render() {
      const data = {
      labels: [
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.currentUserStats.protein_percentage, this.props.currentUserStats.carb_percentage, this.props.currentUserStats.fat_percentage],
        backgroundColor: ['#2761f1','#F1B727','#D3D3D3'],
        hoverBackgroundColor: ['#2761f1','#F1B727','#D3D3D3']
      }]
    }

    return (
     <Doughnut
        data={data}
        width={70}
        height={70}
        options={{
        maintainAspectRatio: false
        }}
        />
    )
  }
}

export default MacroPercentage
