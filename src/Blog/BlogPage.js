import React from 'react'
import {Card, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import * as Markdown from 'react-markdown'

class BlogPage extends React.Component {
  render(){

    console.log(this.props.content.content)
    return(
      <React.Fragment>
        <div style={{width: "100%", height: "350px", margin: "0 auto", background: `linear-gradient(rgba(20,20,20, .3), rgba(20,20,20, .3)), url(${this.props.header.fields.file.url})`}}>
          <h1 style={{fontSize:"55px", width: "100%", fontStyle: "italic", color: "black", paddingTop: "130px"}}>{this.props.title}</h1>
        </div>
        <div style={{marginTop: "40px"}}>
          <Image style={{margin: "0 auto"}} circular size="tiny" src={this.props.authorImage.fields.file.url}/><br/>
          <p>by {this.props.author}</p>
        </div>
        <div style={{margin: "0 auto", width: "50%", marginTop: "40px", textAlign: "left"}}>
          {this.props["content"].content.map(paragraphs => paragraphs.content.map(eachPar =>
          <Markdown source={eachPar.value }/>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default BlogPage

// {this.props["content"].content[0].content[0].value}
