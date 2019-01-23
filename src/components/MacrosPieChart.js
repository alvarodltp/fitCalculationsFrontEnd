import ReactGA from 'react-ga';
import React from 'react';
import {Pie} from 'react-chartjs-2';
import { Button, Header, Icon, Modal, Card, Grid, Input, Popup } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'

class MacrosPieChart extends React.Component {

  sendEmail = () => {
    console.log(this.props.email)
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
         "reply_to": "fitcalculations@gmail.com",
         "from_name": "Fit Calculations",
         "name": this.props.name,
         "to_name": this.props.email,
         "calories": this.props.calories,
         "protein": this.props.protein,
         "carbs": this.props.carbs,
         "fats": this.props.fats,
         "bodyType": this.props.bodyType,
         "goal": this.props.goal,
         "bmr": this.props.bmr
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
      <React.Fragment>
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
      </Card>
      </React.Fragment>
    )
  }
}

export default MacrosPieChart
