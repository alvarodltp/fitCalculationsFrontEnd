import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Grid, Card, Button } from 'semantic-ui-react'


class MacrosPieChart extends React.Component {
  render() {
      const data = {
      labels: [
        'Protein',
        'Carbs',
        'Fats'
      ],
      datasets: [{
        data: [this.props.protein, this.props.carbs, this.props.fats],
        backgroundColor: [
        '#A8FC00',
        '#5400FC',
        '#D3D3D3'
        ],
        hoverBackgroundColor: [
        '#A8FC00',
        '#5400FC',
        '#D3D3D3'
        ]
      }]
    }

    return (
      <Card centered id="macros-card">
        <h1 id="macros-title">Personalized Macronutrient Needs</h1>
        <Grid id="macros-grid" columns="two">
          <Grid.Row>
            <Grid.Column id="pie-chart">
            <Pie
               data={data}
               width={300}
               height={300}
               options={{
               maintainAspectRatio: false
               }}
               />
            </Grid.Column>
            <Grid.Column id="macros-numbers">
              <h3 style={{color: "green"}}>{this.props.protein}g Protein</h3>
              <h3 style={{color: "green"}}>{this.props.carbs}g of Carbs</h3>
              <h3 style={{color: "green"}}>{this.props.fats}g of Fats</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button color="green" id="macros-button">Get a detailed copy of your report</Button>
      </Card>
    )
  }
}

export default MacrosPieChart
