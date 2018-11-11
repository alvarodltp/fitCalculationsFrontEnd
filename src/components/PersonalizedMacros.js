import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'

class PersonalizedMacros extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>Step 2 - Select Your Body Type</h1>
        <div id="image-container">
          <Card onClick={this.props.calculateMacros} id="image-card">
            <Image src='https://www.dropbox.com/s/60htmbhkx75vzdu/Ectomorph.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Ectomorph</Card.Header>
              <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={this.props.calculateMacros} id="image-card">
            <Image src='https://www.dropbox.com/s/1ohq0iomipgmxme/Mesomorph2.jpg?raw=1' />
            <Card.Content>
              <Card.Header>Mesomorph</Card.Header>
              <Card.Description>Naturally muscular and athletic with a moderate metabolic rate.</Card.Description>
            </Card.Content>
          </Card>
          <Card onClick={this.props.calculateMacros} id="image-card">
            <Image src='https://www.dropbox.com/s/m14haf49gsezrwo/Endomorph.jpg?raw=1' />
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
