import React from 'react'
import {Form, Button, Grid, Image} from 'semantic-ui-react'

class Homepage extends React.Component {
  render(){
    return(
      <div id="home-header">
        <div id="content-home-header">
          <h1 style={{marginBottom: "40px"}}>Get your portion control guide and a 100+ approved foods...For Free!</h1>
          <Grid stackable columns={2}>
            <Grid.Row >
              <Grid.Column width={7}>
                <Image style={{margin: "0 auto"}} src='/Alvaro.png' size='medium' circular/>
              </Grid.Column>
              <Grid.Column width={9}>
                <p>Hi! My name is Alvaro and I have 10+ years of experience helping people like you get in the best shape possible. I've helped entrepreneurs and busy professionals get and stay in top notch shape and I can do the same for you.</p>
                <div>
                  <Form>
                    <Form.Input style={{width: "70%"}} name='email' label='' placeholder='Enter your email...' />
                    <Button size="small" id="button-mobile" style={{width: "70%"}} type="submit">
                       GET IT NOW
                    </Button>
                  </Form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Homepage
