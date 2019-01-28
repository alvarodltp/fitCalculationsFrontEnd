import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Button, Header, Icon, Modal, Card, Grid, Input, Popup } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'

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
      <React.Fragment>
      <Card centered id="macros-card">
        <h2 id="macros-title"><Icon style={{color: "yellow"}} name="star" size="small" />YOUR DAILY MACRONUTRIENT NEEDS</h2>
        <p style={{paddingBottom: "20px"}}>This your key number, based on the information you entered in the previous steps, we have determined you need this many calories to accomplish your goal. You can always come back to his calculation if your activity level or goal change as this will affect the number of calories you will need.</p>
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
              <h3>{this.props.protein}g Protein</h3>
              <h3>{this.props.carbs}g Carbs</h3>
              <h3>{this.props.fats}g Fats</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
      </React.Fragment>
    )
  }
}

export default MacrosPieChart
