import React from 'react'
import {Form, Button, Grid, Image} from 'semantic-ui-react'
import Tools from './Tools'
import Products from './Products'
import { BeatLoader } from 'react-spinners';

class Homepage extends React.Component {
  render(){
    return(
      <div id="home-header">
        <div id="content-home-header">
          <h1 style={{margin: "0 auto", fontSize:"36px", marginBottom: "40px", width: "90%", fontStyle: "italic"}}>GET YOUR PORTION CONTROL GUIDE AND A 100+ FOOD LIST...FOR FREE!</h1>
          <Grid stackable columns={2}>
            <Grid.Row >
              <Grid.Column width={7}>
                <Image style={{margin: "0 auto"}} src='/Alvaro.png' size='medium' circular/>
              </Grid.Column>
              <Grid.Column width={9}><br/>
                <p>Hi! My name is Alvaro and I have 10+ years of experience helping people like you get in the best shape possible. I've helped entrepreneurs and busy professionals get and stay in top notch shape and I can do the same for you.</p>
                <div style={{textAlign:"center"}}>
                  <Form>
                    <Form.Input style={{width: "70%"}} name='email' label='' placeholder='Enter your email...' />
                    <Button size="small" id="button-mobile" style={{width: "70%"}} type="submit">
                       GET YOUR FREE GUIDE
                    </Button>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <div id="second-header-home">
          <div id="opacity-50-black">
            <h1 style={{fontSize:"36px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa"}}>FIT CALCULATIONS TOOLS</h1>
            <p style={{margin: "0 auto", width: "80%", textAlign: "left"}}>We want to empower everyone to be their best self by providing the most useful, to the point, and up to date fitness and nutrition information out there. If you understand your body enough to make a few changes to your lifestyle, you can get amazing results in a matter of weeks, and I want to be part of your journey.</p>
            {this.props.allStats !== null ? <Tools allStats={this.props.allStats}/> :
              <div style={{marginTop: "60px"}} className='sweet-loading'>
                <BeatLoader
                  sizeUnit={"px"}
                  size={13}
                  color={"#2761f1"}
                  loading={true}
                />
              </div> }
          </div>
        </div>

        <div id="third-header-home">
          <div id="opacity-50-black">
            <h1 style={{fontSize:"36px", paddingTop: "40px", fontStyle: "italic", textDecoration: "underline", textDecorationColor: "#e80aaa"}}>UNLEASH YOUR FITNESS POTENTIAL</h1>
            <p style={{margin: "0 auto", width: "80%", textAlign: "left"}}>This guide has absolutely everything you need to start your journey into getting in the best shape of your life. Follow my guide for 30 days and if you don't see results I will refund all your money back. That is how confident I feel that this guide will change your body and life.</p>
            <Products allStats={this.props.allStats}/>
          </div>
        </div>


      </div>
    )
  }
}

export default Homepage
