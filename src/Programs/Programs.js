import React from 'react'
import { Card, Image, Icon, Grid, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

const Programs = (props) => {
    return props.programs.map((program, i) =>
    <Grid key={i} style={{display: "inline-block"}}>
      <Grid.Column>
        {program.link.slice(0,5) !== "https" ?
          <Link to={`/${program.link}`}>
          <Card onClick={props.scrollToTop} id="image">
            <Label style={{background: "#2761f1"}} attached='bottom'>
              {program.tags.map(tag =>
              <Label>
                {tag}
              </Label> )}
            </Label>
            <Image  label={{ as: 'a', color: 'green', content: `${program.price}`, icon: 'dollar', ribbon: true }} src={program.image} />
            <Card.Content>
              <Card.Header style={{marginBottom: "0px"}}>{program.name}</Card.Header>
              <Card.Description>
                {program.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </Link> :

          <Card tag="a" href={program.link} key={i} onClick={props.scrollToTop} id="image">
            <Label style={{background: "#2761f1"}} attached='bottom'>
            {program.tags.map(tag =>
            <Label>
              {tag}
            </Label> )}
            </Label>
            <Image  label={{ as: 'a', color: 'green', content: `${program.price}`, icon: 'dollar', ribbon: true }} src={program.image} />
            <Card.Content>
              <Card.Header style={{marginBottom: "0px"}}>{program.name}</Card.Header>
              <Card.Description>
                {program.description}
              </Card.Description>
            </Card.Content>
          </Card> }
      </Grid.Column>
    </Grid>
  )
}

export default Programs
