import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class AllPrograms extends React.Component {
  constructor(){
    super()
    this.state={
      programs: [
            {
              name: '30 Days Core',
              description: 'Work your core and abs like never before.',
              price: "$29.99",
              image: "/athletic-event.png"
            },
            {
              name: 'F#ck Diets',
              description: 'Work your core and abs like never before.',
              price: "$29.99",
              image: "athletic-event.png"
            }
          ]
        }
      }


    displayPrograms = () => {
      return this.state.programs.map(program =>
        <Grid style={{display: "inline-block"}}>
          <Grid.Column>
              <Card onClick={this.props.scrollToTop} id="image">
                <Image src={program.image} />
                <Card.Content>
                  <Card.Header>{program.name}</Card.Header>
                  <Card.Description>
                    {program.description}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  {program.price}
                </Card.Content>
              </Card>
          </Grid.Column>
        </Grid>
      )
    }

  render(){
    return(
      <React.Fragment>
        {this.displayPrograms()}
      </React.Fragment>
    )
  }
}

export default AllPrograms
