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
     <Grid style={{margin: "0 auto", width: "100%"}} columns={2}>
       <Grid.Row>
         <Grid.Column width={10}>
         <Doughnut
            data={data}
            width={300}
            height={300}
            options={{
            maintainAspectRatio: false
            }}
            />
         </Grid.Column>
         <Grid.Column width={6} >
           <div id="macros-numbers">
             <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.proteinPercentage}% Protein</p>
             <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.carbPercentage}% Carbs</p>
             <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.fatPercentage}% Fats</p>
           </div>
         </Grid.Column>
       </Grid.Row>
     </Grid>
    )
  }
}

export default MacroPercentageChart
