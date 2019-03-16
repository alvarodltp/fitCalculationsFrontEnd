import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Popup, Grid, Icon } from 'semantic-ui-react'

class MacroPercentageChart extends React.Component {
  render() {
      const data = {
      labels: [
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.proteinPercentage, this.props.carbPercentage, this.props.fatPercentage],
        backgroundColor: ['#2761f1','#e80aaa','#D3D3D3'],
        hoverBackgroundColor: ['#2761f1','#e80aaa','#D3D3D3']
      }]
    }

    return (
     <Grid style={{margin: "0 auto", width: "90%"}} columns={2}>
       <Grid.Row>
         <Grid.Column width={8}>
         <Doughnut
            data={data}
            width={300}
            height={300}
            options={{
            maintainAspectRatio: false
            }}
            />
         </Grid.Column>
         <Grid.Column width={8} >
           <div id="macros-numbers">
             <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.proteinPercentage}% PROTEIN</h3>
             <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.carbPercentage}% CARBS</h3>
             <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.fatPercentage}% FATS</h3>
           </div>
         </Grid.Column>
       </Grid.Row>
     </Grid>
    )
  }
}

export default MacroPercentageChart
