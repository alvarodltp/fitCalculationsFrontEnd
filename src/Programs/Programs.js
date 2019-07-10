import React from 'react'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

const Programs = (props) => {
    return props.programs.map(program =>
    <Grid style={{display: "inline-block"}}>
      <Grid.Column>
          <Card onClick={props.scrollToTop} id="image">
            <Image src={program.image} />
            <Card.Content>
              <Card.Header style={{marginBottom: "0px"}}>{program.name}</Card.Header>
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

export default Programs
