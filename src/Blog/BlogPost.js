import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as Markdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { FaAngleLeft } from "react-icons/fa";
import RelatedPosts from "./RelatedPosts"

const BlogPost = (props) => {
    let posts = props.props.posts
    let url = window.location.href.split("/").pop()
    let post = Object.values(posts).find(post => post.fields.path === url)
    return(
      <React.Fragment>
        <div>
          <div style={{width: "100%", height: "350px", margin: "0 auto", background: `linear-gradient(rgba(20,20,20, .3), rgba(20,20,20, .3)), url(${post.fields.header.fields.file.url})`}}>
          </div>

          <div style={{marginTop: "40px", textAlign: "left", paddingLeft: "100px"}}>
            <Link to="/blog">
              <p style={{display: "inline-block", fontSize: "15px"}}><FaAngleLeft style={{margin: "0", fontSize: "10px"}}/>Back To All Posts</p>
            </Link>
            <h1 style={{fontSize:"45px", width: "100%", fontStyle: "italic", color: "black", width: "70%"}}>{post.fields.title}</h1>
            <p style={{fontStyle: "italic"}}>{post.fields.description}</p>
          </div>

          <div style={{marginTop: "40px", textAlign: "left", paddingLeft: "100px", paddingBottom: "60px"}}>
            <Image style={{float:"left", display: "inline", marginRight: "20px"}} circular size='tiny' src={post.fields.authorImage.fields.file.url}/><br/>
            <p style={{float:"left", display: "inline", fontStyle: "italic"}}>by {post.fields.author}</p>
          </div>

          {post.fields.content.content.map((paragraphs, i) => paragraphs.content.map(eachPar =>
          <div key={i} style={{paddingLeft: "100px", width: "70%", marginTop: "40px", textAlign: "left"}}>
            <Markdown source={eachPar.value}/>
          </div> ))}
        </div>

        <RelatedPosts posts={posts} post={post}/>
      </React.Fragment>
  )
}

export default BlogPost
