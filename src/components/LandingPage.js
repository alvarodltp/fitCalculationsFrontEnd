import React from 'react'
import {Image, Icon, Button, Card, Grid} from 'semantic-ui-react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ReactCompareImage from 'react-compare-image';
import { FaCheck } from "react-icons/fa";
import WeightChart from './WeightChart'
import CountDown from './CountDown'
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';

class LandingPage extends React.Component {
  constructor(){
    super()
    this.state={
      showFaq1: false,
      showFaq2: false,
      showFaq3: false,
      showFaq4: false
    }
  }

  componentDidMount(){
    this.initGA()
    this.logPageView()
  }

  initGA = () => {
    ReactGA.initialize('UA-131459392-1');
  }

  logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname);
  }

  getEvent1 = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Call To Action On Timer'
    })
  }

  getEvent2 = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Call To Action On Money Back'
    })
  }

  getEvent3 = () => {
    ReactGA.event({
    category: 'Click',
    action: 'Call To Action On Bottom'
    })
  }

  showFaq1 = () => {
    this.setState({
      showFaq1: !this.state.showFaq1
    })
  }

  showFaq2 = () => {
    this.setState({
      showFaq2: !this.state.showFaq2
    })
  }

  showFaq3 = () => {
    this.setState({
      showFaq3: !this.state.showFaq3
    })
  }

  showFaq4 = () => {
    this.setState({
      showFaq4: !this.state.showFaq4
    })
  }


  render(){
    return(
      <React.Fragment>
      <div style={{width: "100%", backgroundColor: "red", height: "30px"}}>
        <div style={{paddingTop: "4px"}}>
          <h4 style={{color: "white"}}>$120 OFF LIMITED TIME SALE</h4>
        </div>
      </div>

      <div style={{width: "80%", margin: "0 auto", marginTop: "30px"}}>
        <h1 style={{fontSize:"36px"}}>You Are One Step From Getting In The Best Shape Of Your Life</h1>
        <h2 style={{color: "blue", fontStyle: "italic"}}>INTRODUCING THE STEP-BY-STEP GUIDE TO BUILD YOUR BEST BODY EVER.</h2>

        <h2>Just a few questions for you:</h2>
      </div>
        <ul style={{width: "100%", marginBottom: "10px"}}>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you interested in a guide that will teach you the tricks that let you eat the foods you love while still making progress towards your goal?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to learn the fitness industry secrets that models use to keep a perfect physique year round?</li><br/>
          <li style={{textAlign: "left", width:"70%", margin: "0 auto"}}>Are you ready to stop guessing and finally learn tested strategies to accomplish your goal without having to deal with restricting diets?</li><br/>
        </ul>
        <p style={{width: "80%", margin:"0 auto", marginBottom: "0px"}}>If you are, then I’m excited to announce THE GUIDE THAT WILL CHANGE YOUR BODY AND LIFE.</p>


        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image style={{ height: "400px", margin: "0 auto", marginBottom: "10px"}} src={'../e-book-white-side.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{marginBottom: "25px", fontWeight: "bold", marginTop: "30px"}}>This Guide Is For You If...</h4>
                  <ul>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      Diets have failed you
                    </li>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      Exercising is just not cutting it
                    </li>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want straight to the point and proven to work system to get to your goal
                    </li>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want fast and sustainable results
                    </li>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want to gain your confidence and energy back
                    </li>
                    <li style={{textAlign: "left", paddingLeft: "10px", paddingBottom: "10px"}}>
                      You want to look and feel amazing
                    </li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div><br/>


        <div style={{width: "100%"}}>
          <h1 style={{fontSize:"36px"}}>What's Included</h1><br/>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../your-results.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px", fontWeight: "bold"}}>Detailed Results Guide</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>All the results you got from the calculation and much more explained in an easy to digest way.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Your calories and macronutrients needs</li>
                    <li style={{paddingBottom: "5px"}}>Your BMR and BMI analysis</li>
                    <li style={{paddingBottom: "5px"}}>Your body type and gender</li>
                    <li style={{paddingBottom: "5px"}}>Your THR(Target Heart Rate) zones and more</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../strategy.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>Easy To Follow Action Plan</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Super simple, yet ridiculously comprehensive system to follow based on your fat loss or muscle building goals.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>A step by step guide on how to implement your results</li>
                    <li style={{paddingBottom: "5px"}}>Refeed and carb cycling strategies to make continuous progress and avoid plateus</li>
                    <li style={{paddingBottom: "5px"}}>Meal guide examples with different calorie levels that have been proven to work</li>
                    <li style={{paddingBottom: "5px"}}>A grocery shopping list with macro friendly foods</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../online-support.png'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>Online Support</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Get unlimited access to our online coaches through access to our new official Facebook community group.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Connect with others on the plan</li>
                    <li style={{paddingBottom: "5px"}}>Share tips and advice</li>
                    <li style={{paddingBottom: "5px"}}>Get Support and motivation</li>
                    <li style={{paddingBottom: "5px"}}>Clear up any questions</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div><br/><br/>

        <div style={{width: "100%", backgroundColor: "#2761f1"}}>
          <div style={{marginBottom: "50px"}} id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row style={{padding: "0"}}>
                <Grid.Column width={6}>
                  <Image style={{background: "white"}} src={'../Alvaro.png'}/>
                </Grid.Column>
                <Grid.Column width={10}>
                  <div id="text-next-image">
                    <p style={{textAlign: "center", fontSize: "18px", marginTop: "20px", marginBottom: "25px", color: "white"}}>"This is not your traditional, super low-calorie, deprivation diet. This is a personalized guide that will educate you in fat loss, nutrition, macronutrients, so you can eat more food than you ever thought possible, spend less time in the gym, and get results that will stay with your for a lifetime."</p>
                    <p style={{textAlign: "center", fontSize: "18px", marginBottom: "25px", color: "white"}}>Alvaro, Fit Calculations</p>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div><br/>


        <div id="how-it-works">
        <h1 style={{fontSize:"36px"}}>How It Works</h1><br/>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>Invest In Yourself</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                Our coaches have your numbers ready to start working on a personalized strategy exclusively for you as soon as you make a purchase.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Check Your Numbers</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                After we get your order, your information and numbers are reviewed to ensure everything looks perfect and your guide will set you up for success.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Implement A guide And Strategy</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                We include over 15 data points such as your BMR, BMI, macronutrient breakdown percetange, and other useful information we will use to make your guide perfect.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: '#2761f1', color: '#fff' }}
              icon={<FaCheck />}
            >
              <Image style={{margin: "0 auto"}} src={null} />
              <h4>We Send Your Guide</h4>
              <p style={{fontSize: "16px", textAlign: "left"}}>
                We will send you the guide within 2 business days of purchase.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div><br/><br/>

        <div style={{width: "100%"}}>
          <h1 style={{fontSize:"36px"}}>And For A Limited Time...</h1><br/>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../fish-taco.jpg'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px"}}>50 Incredible Recipes<h4 style={{color: "red"}}>$̶2̶0̶.̶0̶0̶</h4>FREE</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>This is not a low calorie, restrictive diet. You’ll be eating the foods you love without going hungry.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>50 quick and easy delicious recipes</li>
                    <li style={{paddingBottom: "5px"}}>Nutrition information listed for every single one of them</li>
                    <li style={{paddingBottom: "5px"}}>Includes burgers, pancakes, and other favorites</li>
                    <li style={{paddingBottom: "5px"}}>Included for FREE for a limited time!</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%"}}>
          <div id="landing-main-benefits">
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={7}>
                  <Image src={'../detailed-results'} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <h4 style={{textAlign: "left", marginBottom: "25px", fontWeight: "bold"}}>Lifestyle Tips<h4 style={{color: "red"}}>$̶9̶.̶9̶9̶</h4>FREE</h4>
                  <p style={{textAlign: "left", marginBottom: "25px"}}>Learn good habits that will accelerate your progress.</p>
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Sleep</li>
                    <li style={{paddingBottom: "5px"}}>Work</li>
                    <li style={{paddingBottom: "5px"}}>Managing Stress</li>
                    <li style={{paddingBottom: "5px"}}>Social Life</li>
                  </ul>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div><br/>

        <div style={{width: "100%", backgroundColor: "#F6F6F6", paddingTop: "20px"}}>
          <div style={{marginBottom: "50px", width: "70%"}} id="landing-main-benefits">
          <h1 style={{fontSize: "40px"}}>Ready To Transform Your Body In 2019?</h1>
            <CountDown/><br/>
            <Grid style={{paddingBottom: "50px"}} stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={'../books-3.png'} />
                  <ul>
                    <li style={{paddingBottom: "5px"}}>Detailed Personalized Results ($60 Value)</li>
                    <li style={{paddingBottom: "5px"}}>Personalized Easy To Follow Strategy ($80 Value)</li>
                    <li style={{paddingBottom: "5px"}}>50 Incredible Recipes ($20.00 Value)</li>
                    <li style={{paddingBottom: "5px"}}>Lifestyle Tips($9.99 Value)</li>
                    <li style={{paddingBottom: "5px"}}>Online Support (Priceless)</li>
                    <li style={{paddingBottom: "5px"}}>Refeed And Carb Cycling Strategy</li>
                    <li style={{paddingBottom: "5px"}}>Macro Friendly Food List</li>
                  </ul>
                </Grid.Column>
                <Grid.Column style={{textAlign: "center"}} width={8}>
                  <h1 style={{fontSize: "40px", color: "red"}}>$̶1̶6̶9̶.̶9̶9̶</h1>
                  <h1 style={{fontSize: "40px", color: "green"}}>Only $49.99*</h1>
                  <a target="_self" href="https://sowl.co/zAjVY">
                    <Button onClick={this.getEvent1} id="cta-button" content='YES, I WANT TO TRANSFORM' size="large" icon='angle double right' labelPosition='right' />
                  </a>

              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <p style={{fontSize: "12px"}}>*All guides will be ready and delivered on April, 26th 2019</p>
        </div>


        <div style={{width: "100%"}}>
          <h1 style={{fontSize:"36px", paddingTop: "50px"}}>100% No-Risk Money Back Guarantee</h1><br/>
          <div id="landing-main-benefits">
            <Grid style={{paddingBottom: "50px"}} stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{marginBottom: "40px"}} width={5}>
                  <Image style={{width: "60%", margin: "0 auto"}} src={'../moneyback.png'} circular/>
                </Grid.Column>
                <Grid.Column width={11}>
                  <p style={{textAlign: "left"}}>We are confident your personalized program will give you the results you want. However, if you haven't got closer to your goals, I will refund 100% of the cost.</p>
                  <p style={{textAlign: "left"}}>All you need to do is provide your 30 day food log to verify the program was followed as it was designed and created specifically for you.</p>
                  <a target="_self" href="https://sowl.co/zAjVY">
                    <Button onClick={this.getEvent2} id="cta-button" content='GET $120 OFF NOW' size="large" icon='angle double right' labelPosition='right' />
                  </a>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{width: "100%", backgroundColor: "#F6F6F6", paddingTop: "50px"}}>
          <h1 style={{fontSize:"36px"}}>Frequently Asked Questions</h1>
          <p>If you dont see your question here, feel free to chat with us.</p><br/>
          <div style={{margin: "0 auto", width: "80%"}}>
            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{textAlign: "center"}} width={8}>
                  <Card style={{background: "transparent"}}>
                    <h4 onClick={this.showFaq1} id="title-faq"><Icon id="icon-faq" name="plus" size="tiny"/> When will I first hear from you?</h4>
                    {this.state.showFaq1 === true ?
                    <Fade top >
                      <p style={{textAlign:"left"}}>From the moment you purchase your guide, you will receive an email from me. All pre-ordered guides will be delivered on 04/23/2019.</p>
                    </Fade> : null}
                  </Card>
                </Grid.Column>
                <Grid.Column style={{textAlign: "center"}} width={8}>
                  <Card style={{background: "transparent"}}>
                    <h4 onClick={this.showFaq2} id="title-faq"><Icon id="icon-faq" name="plus" size="tiny"/> How does the support work?</h4>
                    {this.state.showFaq2 === true ?
                    <Fade top >
                      <p style={{textAlign: "left"}}>You have questions, we have an answers. You will be invited to join our private members only Facebook group. Here, you will be able to ask any questions, share tips, and interact with the Fit Calculations community.</p>
                    </Fade> : null }
                  </Card>
              </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid stackable columns={2}>
              <Grid.Row>
                <Grid.Column style={{textAlign: "center", marginBottom: "60px"}} width={8}>
                  <Card style={{background: "transparent"}}>
                    <h4 onClick={this.showFaq3} id="title-faq"><Icon id="icon-faq" name="plus" size="tiny"/> Is the guide really custom to me?</h4>
                    {this.state.showFaq3 === true ?
                    <Fade top >
                      <p style={{textAlign: "left"}}>Absolutely. Every guide is custom to each person. We will use your calculation results to make sure the guide is perfect for you. If you succeed, we succeed. There isn't a one fits all guide when it comes to getting fit.</p>
                    </Fade> : null }
                  </Card>
                </Grid.Column>
                <Grid.Column style={{textAlign: "center", marginBottom: "60px"}} width={8}>
                  <Card style={{background: "transparent", marginBottom: "30px"}}>
                    <h4 onClick={this.showFaq4} id="title-faq"><Icon id="icon-faq" name="plus" size="tiny"/> Do I need access to a gym?</h4>
                  {this.state.showFaq4 === true ?
                  <Fade top>
                    <p style={{textAlign: "left"}}>No, this is not a workout guide. However, we will provide cardio recommendations based on your goal to lose weight or gain muscle. You can perform this activities anywhere you want.</p>
                  </Fade> : null }
                  </Card>
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <div style={{marginBottom: "0px", width: "100%", backgroundColor: "#e80aaa"}}>
          <div style={{paddingBottom: "30px"}}>
            <h1 style={{fontSize:"36px", paddingTop: "20px", color: "white", fontStyle: "italic"}}>Are You Ready?</h1>
            <a target="_self" href="https://sowl.co/zAjVY">
              <Button onClick={this.getEvent3} id="cta-button" content='GET $120 OFF NOW' size="large" icon='angle double right' labelPosition='right' />
            </a>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default LandingPage
//
// <div>
//   <div id="landing-main-benefits">
//     <h1 style={{fontSize:"36px"}}>What Clients Say</h1><br/>
//     <Grid id="transformation-images" stackable columns={3}>
//       <Grid.Row>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//         <Grid.Column>
//         <Card id="testimonial-card">
//           <Image id="img-diet-type" src={'../Brandt.png'} />
//           <Card.Content>
//             <Card.Description>"Our coaches create your personal macro strategy and provide you with super simple." - Steve</Card.Description>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </div>
// </div><br/>

// <div id="landing-main-benefits">
//   <h1 style={{fontSize:"36px"}}>They Did It And So Can You</h1><br/>
//   <Grid id="transformation-images" stackable columns={3}>
//     <Grid.Row>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../Al.jpg'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//       <Grid.Column>
//         <ReactCompareImage leftImage={'../vacation.png'} rightImage={'../ebook.png'} hover={true} />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// </div><br/>
// <Button style={{width: "60%", background: '#2761f1', color: "white", margin: "0 auto", marginBottom: "30px", marginTop: "30px"}} content='Start Your Transformation Today' size="huge" icon='angle double right' labelPosition='right' />

// <div style={{width: "100%", backgroundColor: "#F6F6F6"}}>
//   <div style={{marginBottom: "50px"}} id="landing-main-benefits">
//     <h1 style={{fontSize:"36px", paddingTop: "50px"}}>Get Unlimited Support</h1><br/>
//     <Grid style={{paddingBottom: "50px"}} stackable columns={2}>
//       <Grid.Row>
//         <Grid.Column width={5}>
//           <Image style={{background: "white"}} src={'../Alvaro.png'} circular/>
//         </Grid.Column>
//         <Grid.Column width={11}>
//           <p style={{textAlign: "left"}}>Hi there!</p>
//           <p style={{textAlign: "left"}}>I am Alvaro, the founder of Fit Calculations. I have been training busy professionals for over 8 years and I know first hand what it takes to lose weight, gain muscle and get in top notch shape.</p>
//           <p style={{textAlign: "left"}}>This program is like nothing you have ever seen. If you are ready to commit, you are about to get in the best shape of your life.</p>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </div>
// </div>
