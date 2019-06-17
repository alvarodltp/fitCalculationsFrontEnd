import React from 'react'
import { Card, Image, Icon, Grid, Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Products = (props) => {
  return(
    <React.Fragment>
      <div style={{margin: "0 auto", width: "80%", marginTop: "40px", marginBottom: "60px"}}>
        <Grid stackable columns={2}>
          <Grid.Row >
            <Grid.Column width={7}>
              <Image id="image-product-home" style={{margin: "0 auto"}} src='/e-book-white-side.png' size='medium' />
            </Grid.Column>
            <Grid.Column width={9}><br/>
              <ul style={{marginTop: "0px", marginBottom: "40px"}}>
                <li>Get your personalized number of calories and macronutrient to accomplsih your goal.</li>
                <li>Understand your results with an easy to read guide.</li>
                <li>An implementation plan so you can apply your results and get in the best shape of your life.</li>
                <li>24/7 private facebook group support.</li>
              </ul>
              <a target="_self" href="https://www.fitcalculations.com/unleash-your-fitness-potential">
              <div style={{textAlign:"center"}}>
                <Button size="large" id="button-mobile" style={{width: "70%"}} type="submit">
                   YES, I WANT TO GET FIT!
                </Button>
              </div>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default Products
