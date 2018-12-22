import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Button, Header, Icon, Modal, Card, Grid, Input } from 'semantic-ui-react'


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
          <Modal id="email-modal" trigger={<Button id="macros-button">Get Complete PDF Report</Button>} basic size='small'>
          <Header icon='mail' content='Get a Complete Personalized Report' />
         <Modal.Content>
           <p>
             Enter your email address.
           </p>
         <Input iconPosition='left' placeholder='Email'>
           <Icon name='at' />
           <input />
         </Input>
         </Modal.Content>
         <Modal.Actions>
           <Button basic color='red' inverted>
             <Icon name='remove' /> Cancel
           </Button>
           <Button color='green' inverted>
             <Icon name='checkmark' /> Send
           </Button>
         </Modal.Actions>
       </Modal>
      </Card>
    )
  }
}

export default MacrosPieChart
