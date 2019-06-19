import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Tools extends React.Component {
  constructor(){
    super()
    this.state={
      calculations: [
        {
          title: 'Grocery Shopping List Tool',
          description: 'Make a grocery list with our healthy food options, save it, and use it when you are ready to shop!',
          link: "/food-list",
          image: "grocery.jpg",
          id: "shopping"
        },
        {
          title: 'Macronutrients and Calories Calculator',
          description: 'Calculate your personalized calories and macronutrients and get instant results.',
          link: "/calories-and-macros",
          image: "calories-macros.jpg",
          id: "macro"
        },
        {
          title: 'BMI Calculator',
          description: 'Calculate your BMI.',
          link: "/bmi-calculator",
          image: "bmi.jpg",
          id: "bmi"
        }
      ]
    }
  }

  render(){
    return(
      <React.Fragment>
        {this.state.calculations.map(calculation =>
        <div style={{margin: "0 auto", width: "80%"}}>
          <Grid className="ui center aligned grid">
              <Grid.Column>
                <Link to={calculation.link}>
                  <Card id={calculation.id} style={{margin: "0 auto"}}>
                    <Image src={calculation.image} />
                    <Card.Content>
                      <Card.Header>{calculation.title}</Card.Header>
                      <Card.Description>
                        {calculation.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='star' />

                      </a>
                    </Card.Content>
                  </Card>
                </Link>
              </Grid.Column>
          </Grid><br/><br/>
        </div>)}
      </React.Fragment>
    )
  }
}

export default Tools
