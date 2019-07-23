import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Image, Input } from 'semantic-ui-react'

const BlogSide = (props) => {
  return(
    <div id="blog-side">
    <div className="blog-about">
      <h2>About The Author</h2>
      <Image src="Alvaro-wall.png" style={{margin: "0 auto", height: "350px"}}/><br/>
      <p style={{margin: "0 auto", width: "80%"}}>Fit Calculations was created by Alvaro De La Torre. Alvaro is a Personal Trainer based in Washington DC.</p><br/>
      <Button>CONTACT</Button>
    </div>
      <div className="post-signup">
        <h1>Don't miss a post!</h1>
        <p>Get notified on new posts</p>
        <Input style={{width: "80%"}} placeholder="Name"/><br/><br/>
        <Input style={{width: "80%"}} placeholder="Email"/><br/><br/>
        <Button>YES, SEND ME FREE ADVICE!</Button>
      </div>
      <div className="post-quiz">
        <h1>Ready To Get Lean, Fit, And Sexy?</h1>
        <p style={{margin: "0 auto", width: "80%"}}>Take the free quiz and we'll tell you where to start.</p><br/>
        <Button>START THE QUIZ</Button>
      </div>
    </div>
  )
}

export default BlogSide
