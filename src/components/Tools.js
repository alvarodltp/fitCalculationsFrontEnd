import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Tools = (props) => {
  return(
    <React.Fragment>
      <div style={{margin: "0 auto", width: "80%", marginTop: "40px"}}>
        <Grid className="ui center aligned grid" stackable columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Link to="/calories-and-macros">
                <Card id="image-card" style={{margin: "0 auto"}}>
                  <Image src='books-3.png' />
                  <Card.Content>
                    <Card.Header>Macronutrients and Calories</Card.Header>
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

            <Grid.Column>
            <Card id="image-card" style={{margin: "0 auto"}}>
              <Image src='veggies.jpg' />
              <Card.Content>
                <Card.Header>Grocery Shopping List</Card.Header>
                <Card.Description>
                  Make a grocery list with our health approved foods, save it, and use it when you are ready to shop!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='star' />
                  22 Cal
                </a>
              </Card.Content>
            </Card>
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
          </Grid.Row>
        </Grid>
       </div>
    </React.Fragment>
  )
}

export default Tools
