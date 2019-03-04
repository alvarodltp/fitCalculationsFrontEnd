import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Button, Header, Icon, Modal, Card, Grid, Input, Popup } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'
import Fade from 'react-reveal/Fade';

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
        '#2761f1',
        '#e80aaa',
        '#D3D3D3'
        ],
        hoverBackgroundColor: [
        '#2761f1',
        '#e80aaa',
        '#D3D3D3'
        ]
      }]
    }

    return (
      <React.Fragment>
      <Card centered id="calories-result">
        <h2 id="macros-title">YOUR DAILY MACRONUTRIENTS</h2>
      </Card>
      <Fade top when={this.props.macrosInfo}>
        <div style={{width: "80%", margin: "0 auto"}}>
          <p>The amount of protein, cabohydrates, and fats you intake is essential for optimal results. Different body types have different needs so it is important to calculate these numbers based on what you need.</p>
        </div>
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
              <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.protein}G PROTEIN</h3>
              <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.carbs}G CARBS</h3>
              <h3><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.fats}G FATS</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fade>
      </React.Fragment>
    )
  }
}

export default MacrosPieChart
