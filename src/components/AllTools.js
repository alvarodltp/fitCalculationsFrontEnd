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
          image: "grocery.jpg"
        },
        {
          title: 'Macronutrients and Calories Calculator',
          description: 'Calculate your personalized calories and macronutrients and get instant results.',
          link: "/calories-and-macros",
          image: "calories-macros.jpg",
        },
        {
          title: 'BMI Calculator',
          description: 'Calculate your BMI.',
          link: "/bmi-calculator",
          image: "bmi.jpg"
        }
      ]
    }
  }

  displayTools = () => {
    return this.state.calculations.map(calculation =>
      <Grid style={{display: "inline-block"}}>
        <Grid.Column>
          <Link to={calculation.link}>
            <Card onClick={this.props.scrollToTop} id="image">
              <Image src={calculation.image} />
              <Card.Content>
                <Card.Header>{calculation.title}</Card.Header>
                <Card.Description>
                  {calculation.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
              </Card.Content>
            </Card>
          </Link>
        </Grid.Column>
      </Grid>)
  }

  render(){
    return(
      <React.Fragment>
        <div>
          {this.displayTools()}
        </div>
        <div style={{clear: "both"}}>
        </div>
      </React.Fragment>
    )
  }
}

export default Tools
