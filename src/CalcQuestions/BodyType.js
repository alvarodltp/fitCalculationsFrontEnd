import React from 'react'
import './BodyType.css'
import { Icon, Card, Image, Divider, Popup } from 'semantic-ui-react'
import Fade from 'react-reveal/Slide';

const BodyType = (props) => {
  return(
    <React.Fragment>
      <div>
        <div style={{marginBottom: "40px"}}>
          <Divider id="title-body-type" horizontal>
            <Popup trigger={<Icon style={{margin: "0 auto"}} size="large" name="arrow left" onClick={() => {props.substractOneFromStep(); props.setFormToTrue()}} style={{textAlign: "left"}} />} content='Back' /> 
            SELECT YOUR BODY TYPE
          </Divider>
        </div>
        <div className="body-type-points-card">
          <ul>
            <li>Your body type will add more accuracy to your macronutrient needs.</li>
            <li>It will determine the type of exercise and nutrition you need to get to your goal as fast and safe as possible.</li>
            <li>If you think you are in between 2 body types, select the broader one.</li>
          </ul>
        </div><br/>
        <Fade left>
          <div className="body-imgs-container">
            <div className="body-img-container" onClick={(e) => {props.calculateMacros("Ectomorph"); props.addOneToStep()}} id="image-card">
              <Image src={'../Ectomorph.jpg'} />
              <h4>Ectomorph</h4>
              <p>Naturally thin, with a fast metabolic rate.</p>
            </div>
            <div className="body-img-container" onClick={(e) => {props.calculateMacros("Mesomorph"); props.addOneToStep()}} id="image-card">
              <Image src={'../Mesomorph.jpg'} />
              <h4>Mesomorph</h4>
              <p>In between an Ectomorph and an Endomorph with a moderate metabolic rate</p>
            </div>
            <div className="body-img-container" onClick={(e) => {props.calculateMacros("Endomorph"); props.addOneToStep()}} id="image-card">
              <Image src={'../Endomorph.jpg'} />
              <h4>Endomorph</h4>
              <p>Naturally broad and thick with a slow metabolic rate.</p>
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  )
}

export default BodyType
