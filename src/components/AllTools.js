import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Tools = (props) => {
  return(
    <React.Fragment>
      <div style={{margin: "0 auto", width: "80%"}}>
        <Grid className="ui center aligned grid" stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
            <Link to="/food-list">
              <Card id="image-card" style={{margin: "0 auto"}}>
                <Image src='veggies.jpg' />
                <Card.Content>
                  <Card.Header>Grocery Shopping List Tool</Card.Header>
                  <Card.Description>
                    Make a grocery list with our healthy food options, save it, and use it when you are ready to shop!
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='star' />
                    22 Cal
                  </a>
                </Card.Content>
              </Card>
            </Link>
            </Grid.Column>
            <Grid.Column style={{marginBottom: "40px"}} width={8}>
              <Link to="/calories-and-macros">
                <Card onClick={props.scrollToTop} id="image-card" style={{margin: "0 auto"}}>
                  <Image src='iphone-pink.jpg' />
                  <Card.Content>
                    <Card.Header>Macronutrients and Calories Calculator</Card.Header>
                    <Card.Description>
                      Calculate your personalized calories and macronutrients and get instant results.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <a>
                        <Icon name='star' />
                        Used {props.allStats.length} times
                      </a>
                  </Card.Content>
                </Card>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid><br/><br/>
      </div>
    </React.Fragment>
  )
}

export default Tools
