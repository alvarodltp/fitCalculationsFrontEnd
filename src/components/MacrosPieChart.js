import ReactGA from 'react-ga';
import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Button, Header, Icon, Modal, Card, Grid, Input, Popup } from 'semantic-ui-react'


class MacrosPieChart extends React.Component {

  sendEmail = () => {
    // debugger
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'default_service',
        template_id: 'template_bLD8XqyE',
        user_id: 'user_fFb7UZUUUS7jEGG8aJVSb',
        template_params: {
         "reply_to": "alvarodltp@gmail.com",
         "from_name": "Fit Calculations",
         "name": this.props.name,
         "to_name": "alvarodltp@gmail.com",
         "message_html": "Hello",
         "calories": this.props.calories,
         "protein": this.props.protein,
         "carbs": this.props.carbs,
         "fats": this.props.fats,
         "bodyType": this.props.bodyType,
         "goal": this.props.goal
       }
     })
    })
  }

  getEvent = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Understand How To Use Your Results'
    })
  }

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
        <h2 id="macros-title">Daily Macronutrients Needs</h2>
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
              <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.protein}g Protein</h3>
              <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.carbs}g of Carbs</h3>
              <h3 style={{color: "green", fontStyle: "italic"}}>{this.props.fats}g of Fats</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          <Modal id="email-modal"
          open={this.props.modalOpen}
          trigger={<Button onClick={ (e) => {this.props.handleOpen(); this.sendEmail(); this.getEvent()}} id="macros-button">Understand How To Use Your Results</Button>}
          basic
          size='small'>
          <Header icon='mail' content='Get a Complete Personalized Report' />
           <Modal.Content>
             <p>
               Enter your name and email address.
             </p>
           <Input onChange={this.props.getName} placeholder='Name'>
             <input />
           </Input>
           <Input onChange={(e) => {this.props.getEmail(e); this.props.validateEmail(e)}} iconPosition='left' placeholder='Email'>
             <Icon name='at' />
             <input />
           </Input>
           </Modal.Content>
         <Modal.Actions>
           <Button onClick={this.props.handleClose} basic color='red' inverted>
             <Icon name='remove' /> Cancel
           </Button>
           <Button disabled={this.props.submitButtonDisabled} onClick={() => {this.props.saveEmailToUser(); this.props.handleClose()}} color='green' inverted>
             <Icon name='checkmark' /> Send
           </Button>
         </Modal.Actions>
       </Modal>

      </Card>
    )
  }
}

export default MacrosPieChart
