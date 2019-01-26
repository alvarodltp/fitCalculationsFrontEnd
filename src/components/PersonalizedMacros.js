import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

class PersonalizedMacros extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div id="image-container">
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/dke7zu7ipam9cjr/Ectomorph%20copy.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Ectomorph</Card.Header>
              <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/yvm1kswytfgpy6x/Mesomorph%20copy.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Mesomorph</Card.Header>
              <Card.Description>Naturally athletic with a moderate metabolic rate. In between an Ectomorph and an Endomorph.</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
            <Image src='https://www.dropbox.com/s/5kg70hut82op165/Endomorph%20copy.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Endomorph</Card.Header>
              <Card.Description>Naturally broad and thick with slow metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

export default PersonalizedMacros
