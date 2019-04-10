import React from 'react'
import { Icon, Card, Image, Divider, Popup } from 'semantic-ui-react'
import Fade from 'react-reveal/Slide';

class PersonalizedMacros extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div>
          <div style={{marginBottom: "40px"}}>
            <Divider id="title-body-type" horizontal>
              <Popup trigger={<Icon style={{margin: "0 auto"}} size="large" name="arrow left" onClick={() => {this.props.substractOneFromStep(); this.props.setFormToTrue()}} style={{textAlign: "left"}} />} content='Back' /> SELECT YOUR BODY TYPE
            </Divider>
          </div>
            <Card id="body-type-points-card">
              <ul>
                <li style={{textAlign: "left"}}>Your body type will add more accuracy to your macronutrient needs.</li>
                <li style={{textAlign: "left"}}>It will determine the type of exercise and nutrition you need to get to your goal as fast and safe as possible.</li>
                <li style={{textAlign: "left"}}>If you think you are in between 2 body types, select the broader one.</li>
              </ul>
            </Card><br/>
          <Fade left>
          <div style={{marginBottom: "50px"}}>
            <Card style={{width: "250px"}} onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep()}} id="image-card">
              <Image src={'../Ectomorph.jpg'} />
              <Card.Content>
                <Card.Header>Ectomorph</Card.Header>
                <Card.Description>Naturally thin, with a fast metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
            <Card style={{width: "250px"}} onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep()}} id="image-card">
              <Image src={'../Mesomorph.jpg'} />
              <Card.Content>
                <Card.Header>Mesomorph</Card.Header>
                <Card.Description>In between an Ectomorph and an Endomorph with a moderate metabolic rate. </Card.Description>
              </Card.Content>
            </Card>
            <Card style={{width: "250px"}} onClick={(e) => {this.props.calculateMacros(e); this.props.addOneToStep()}} id="image-card">
              <Image src={'../Endomorph.jpg'} />
              <Card.Content>
                <Card.Header>Endomorph</Card.Header>
                <Card.Description>Naturally broad and thick with a slow metabolic rate.</Card.Description>
              </Card.Content>
            </Card>
          </div>
          </Fade>
        </div>
      </React.Fragment>
    )
  }
}

export default PersonalizedMacros
