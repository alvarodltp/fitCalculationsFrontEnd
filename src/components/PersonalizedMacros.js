import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

class PersonalizedMacros extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div id="image-container">
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/60htmbhkx75vzdu/Ectomorph.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Ectomorph</Card.Header>
              <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/tmfa108tkrzg60x/Mesomorph.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Mesomorph</Card.Header>
              <Card.Description>In between an Ectomorph and an Endomorph with a moderate metabolic rate. </Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/m14haf49gsezrwo/Endomorph.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Endomorph</Card.Header>
              <Card.Description>Naturally broad and thick with a slow metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

export default PersonalizedMacros
