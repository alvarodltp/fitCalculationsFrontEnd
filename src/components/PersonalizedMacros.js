import React from 'react'
import { Icon, Card, Image, Button, Dimmer, Loader } from 'semantic-ui-react'

class PersonalizedMacros extends React.Component {
  constructor(){
    super()
    this.state={
      loading: true
    }
  }

  render(){
    return(
      <React.Fragment>
      { this.props.user === null ?
      <Dimmer active={this.state.loading} inverted>
        <Loader inverted>Loading Body Types</Loader>
      </Dimmer> :
      <div>
          <div>
            <h2 id="title-body-type"><Icon onClick={this.displayBmrInfo} name="angle right" size="mini"/>YOUR BODY TYPE</h2>
            <div id="body-type-points">
                <h4><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />Knowing your body type will personalize your results further.</h4>
                <h4><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />It will help us understand the type of exercises and nutrition you’ll need.</h4>
                <h4 style={{marginBottom: "15px"}}><Icon style={{color: "#2761f1"}} name='hand point right outline' size="medium" />If you think you are in between 2 body types, select the broader one.</h4>
            </div>
          </div>
          <div id="image-container">
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Ectomorph.jpg'} />
              <Card.Content>
                <Card.Header>Ectomorph</Card.Header>
                <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Mesomorph.jpg'} />
              <Card.Content>
                <Card.Header>Mesomorph</Card.Header>
                <Card.Description>In between an Ectomorph and an Endomorph with a moderate metabolic rate. </Card.Description>
              </Card.Content>
            </Card>
            <Card onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep(); this.props.scrollToTop()}} id="image-card">
              <Image src={'../Endomorph.jpg'} />
              <Card.Content>
                <Card.Header>Endomorph</Card.Header>
                <Card.Description>Naturally broad and thick with a slow metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div> }
      </React.Fragment>
    )
  }
}

export default PersonalizedMacros

// 'https://www.dropbox.com/s/60htmbhkx75vzdu/Ectomorph.jpg?raw=1'
