import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Popup, Grid, Icon } from 'semantic-ui-react'

class Macros extends React.Component {
  render() {
      const data = {
      labels: [
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.currentUserStats.protein_grams, this.props.currentUserStats.carb_grams, this.props.currentUserStats.fat_grams],
        backgroundColor: ['#2761f1','#e80aaa','#D3D3D3'],
        hoverBackgroundColor: ['#2761f1','#e80aaa','#D3D3D3']
      }]
    }

    return (
         <Pie
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

export default Macros
