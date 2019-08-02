import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as Markdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { FaAngleLeft } from "react-icons/fa";
import RelatedPosts from './RelatedPosts'
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  EmailIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  EmailShareButton
} from 'react-share';
import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';


class BlogPost extends React.Component {

  handleNewComment(comment) {
   window.console.info(`New comment posted with id ${comment.id} and message: ${comment.text}`);
  }

  render(){
    let posts = this.props.posts
    let url = window.location.href.split("/").pop()
    let post = Object.values(posts).find(post => post.fields.path === url)
    const threadConfig = {
      url: `https://www.fitcalculations.con/blog/${url}`,
      identifier: post.sys.id,
      onNewComment: this.handleNewComment
    };

    return(
      <React.Fragment>
        <div>
          <div style={{width: "100%", height: "350px", margin: "0 auto", background: `linear-gradient(rgba(20,20,20, .3), rgba(20,20,20, .3)), url(${post.fields.header.fields.file.url})`}}>
          </div>

          <div className="back-to-posts">
            <Link to="/blog">
              <p style={{display: "inline-block", fontSize: "15px"}}><FaAngleLeft style={{margin: "0", fontSize: "10px"}}/>Back To All Posts</p>
            </Link>
            <h1 className="blog-post-title">{post.fields.title}</h1>
            <p style={{fontStyle: "italic"}}>{post.fields.description}</p>
          </div>

          <div className="share-container">
            <FacebookShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <LinkedinShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <PinterestShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <PinterestIcon size={32} round={true} />
            </PinterestShareButton>
            <EmailShareButton url={`https://www.fitcalculations.con/blog/${url}`} className="Demo__some-network__share-button">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
          </div>

          <div className="post-author">
            <Image style={{float:"left", display: "inline", marginRight: "20px"}} circular size='tiny' src={post.fields.authorImage.fields.file.url}/><br/>
            <p style={{float:"left", display: "inline", fontStyle: "italic", paddingTop: "20px"}}>by {post.fields.author}</p>
          </div>

          {post.fields.content.content.map((paragraphs, i) => paragraphs.content.map(eachPar =>
          <div key={i} className="blog-content">
            <Markdown source={eachPar.value}/>
          </div> ))}
        </div>

        <div className="comment-box">
          <DiscussionEmbed shortname={"fitcalculations-com"} config={threadConfig} />
        </div>
        <RelatedPosts posts={posts} post={post}/>
      </React.Fragment>
    )
  }
}


export default BlogPost
