import React from 'react'
import { Icon, Card, Image, Button, Divider } from 'semantic-ui-react'
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import Fade from 'react-reveal/Slide';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class PersonalizedMacros extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div>
          <div style={{marginBottom: "40px"}}>
            <Divider id="title-body-type" horizontal>
                SELECT YOUR BODY TYPE
            </Divider>
          </div>
            <Card id="body-type-points-card">
                <p id="body-type-points"><Icon style={{color: "#2761f1"}} name='angle right' size="small" />Your body type will add more accuracy to your macronutrients.</p>
                <p id="body-type-points"><Icon style={{color: "#2761f1"}} name='angle right' size="small" />It will determine the type of exercise and nutrition you need to get to your goal as fast and safe as possible.</p>
                <p id="body-type-points"><Icon style={{color: "#2761f1"}} name='angle right' size="small" />If you think you are in between 2 body types, select the broader one.</p>
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

// {this.props.user === null ?
// <div>
//   <div style={{marginBottom: "40px", marginTop: "30px"}} className='sweet-loading'>
//     <BeatLoader
//       css={override}
//       sizeUnit={"px"}
//       size={15}
//       color={this.props.gender === "Female" ? '#e80aaa' : '#2761f1'}
//       loading={this.props.loading}
//     />
//   </div>
//   <p style={{fontStyle: "italic", fontSize: "12px"}}>
//     Calculating Calories/<br/>
//     Loading Body Types
//   </p><br/>
// </div> :
