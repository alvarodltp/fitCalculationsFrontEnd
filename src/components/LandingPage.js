import React from 'react'
import {Image, Icon, Button, Card} from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class LandingPage extends React.Component {

  render(){
    return(
      <React.Fragment>
      <div style={{width: "80%", margin: "0 auto", marginTop: "40px"}}>
        <h1 style={{fontSize:"40px"}}>You're one step from getting in the best shape of your life</h1>
        <h2 style={{color: "blue"}}>INTRODUCING THE STEP-BY-STEP FORMULA I USED TO BUILD THE BODY OF MY DREAMS.</h2>
        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", fontSize: "20px", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the secrets that Hollywood stars, athletes and fitness models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a program that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to sidestep the internet's endless parade of hollow tactics and finally learn tested strategies to {this.props.goal.toLowerCase()} without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{fontSize: "20px", width: "80%", margin:"0 auto", marginBottom: "50px"}}>If you are, then I’m excited to announce A NEW PROGRAM THAT’S YEARS IN THE MAKING.</p>
        <Image style={{width: "250px", margin: "0 auto", marginBottom: "50px"}}src={'../ebook.png'} />
        <Button style={{background: "#2761f1", color: "white", margin: "0 auto", marginBottom: "30px"}} content='START YOUR JOURNEY TODAY' size="huge" icon='angle double right' labelPosition='right' />
        <div id="landing-main-benefits">
        <h1 style={{fontSize:"40px"}}>A Few Things You Get...</h1><br/>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>DETAILED RESULTS</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PERSONAL MACRO STRATEGY</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>REFEED STRATEGIES</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div id="landing-main-benefits">
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>LIFESTYLE GUIDE</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>GROCERY SHOPPING LIST</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Image id="img-motivation" src={'../vacation.png'} />
            <Card.Content>
              <Card.Header>PROVEN MEAL PLAN EXAMPLES</Card.Header>
                <Card.Description>Our coaches create your personal macro strategy and provide you with super simple, yet ridiculously comprehensive program to follow based on your fat loss or muscle building goals.</Card.Description>
            </Card.Content>
          </Card>

          <div id="landing-main-benefits">
          <h1 style={{fontSize:"40px"}}>What Clients Say</h1><br/>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image id="img-motivation" src={'../vacation.png'} />
              <Card.Content>
                <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
              </Card.Content>
            </Card>
          </div>
          <h1 style={{fontSize:"40px"}}>How It Works</h1>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<h2 style={{marginTop: "15px"}}>1</h2>}
              >
                <h3 className="vertical-timeline-element-title">Invest In Yourself</h3>
                <p>
                  Our coaches have your numbers ready to start working on a personalized strategy for you exclusively as soon as you make the purchase.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<h2 style={{marginTop: "15px"}}>2</h2>}
              >
                <h3 className="vertical-timeline-element-title">Numbers Check</h3>
                <p>
                  Your assigned coach will review your information and will ensure your numbers are perfect for success.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<h2 style={{marginTop: "15px"}}>3</h2>}
              >
                <h3 className="vertical-timeline-element-title">Strategy Plan</h3>
                <p>
                  Your coach will review your information such as goal, diet type, and motivation and will build a plan that your body will respond to for best results.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<h2 style={{marginTop: "15px"}}>4</h2>}
              >
                <h3 className="vertical-timeline-element-title">Personalized Plan Implementation</h3>
                <p>
                  Once your coach has gathered all your information and has come up with a perfect strategy for you, we will review the plan once again to make sure its perfect.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<h2 style={{marginTop: "15px"}}>5</h2>}
              >
                <h3 className="vertical-timeline-element-title">Your plan is ready</h3>
                <p>
                  We will send you the plan within 2 business days of purchase.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: '#2761f1', color: '#fff' }}
                icon={<Icon style={{marginTop: "20px", marginRight: "1px", color: "yellow"}}name="star" size="large"/>}
              >
                <h3 className="vertical-timeline-element-title">It's Your Time To Shine</h3>
                <p>
                  We can't wait to see your results.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          <h1 style={{fontSize:"40px"}}>Your Coach</h1>
          <Card>

          </Card>

        </div>
      </React.Fragment>
    )
  }
}

export default LandingPage
