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
        '#F1B727',
        '#D3D3D3'
        ],
        hoverBackgroundColor: [
        '#2761f1',
        '#F1B727',
        '#D3D3D3'
        ]
      }]
    }

    return (
      <React.Fragment>
        <Grid style={{margin: "0 auto", width: "100%"}} columns={2}>
          <Grid.Row>
            <Grid.Column width={10}>
            <Pie
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
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.protein}G Protein</p>
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.carbs}G Carbs</p>
                <p><Icon style={{color: "#7CFC00"}} name="check" size="small" />{this.props.fats}G Fats</p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    )
  }
}

export default MacrosPieChart
