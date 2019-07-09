import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as Markdown from 'react-markdown';
import Slide from 'react-reveal/Slide';

class BlogPage extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div style={{width: "100%", height: "350px", margin: "0 auto", background: `linear-gradient(rgba(20,20,20, .3), rgba(20,20,20, .3)), url(${this.props.allFields.header.fields.file.url})`}}>
        </div>

        <Slide left>
          <div style={{height: "5px", background: "linear-gradient(270deg, rgba(39,97,241,1) 0%, rgba(232,10,170,1) 80%)"}}>
          </div>
        </Slide>

        <div style={{marginTop: "40px", textAlign: "left", paddingLeft: "100px"}}>
          {this.props.allFields.tags.map(tag =>
          <p style={{display: "inline-block"}}>{tag.charAt(0).toUpperCase() + tag.slice(1)}/</p> )}
          <h1 style={{fontSize:"45px", width: "100%", fontStyle: "italic", color: "black", width: "70%"}}>{this.props.allFields.title}</h1>
          <p style={{fontStyle: "italic"}}>{this.props.allFields.description}</p>
        </div>

        <div style={{paddingLeft: "100px", width: "70%", marginTop: "40px", textAlign: "left"}}>
          {this.props.allFields["content"].content.map(paragraphs => paragraphs.content.map(eachPar =>
          <Markdown source={eachPar.value }/>
          ))}
        </div>

        <div style={{marginTop: "40px", textAlign: "left", paddingLeft: "100px"}}>
          <h2>About The Author</h2>
          <Divider style={{width: "70%"}}/>
          <Image circular size="tiny" src={this.props.allFields.authorImage.fields.file.url}/><br/>
          <p>{this.props.allFields.author}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default BlogPage

// {this.props["content"].content[0].content[0].value}
