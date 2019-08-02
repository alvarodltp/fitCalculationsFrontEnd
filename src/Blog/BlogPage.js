import React from 'react'
import {Card, Image, Divider} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import * as Markdown from 'react-markdown';
import Slide from 'react-reveal/Slide';
import { FaAngleLeft } from "react-icons/fa";
import BlogPost from './BlogPost'
import RelatedPosts from './RelatedPosts'

const BlogPage = (props) => {
  return(
    <React.Fragment>
      <BlogPost posts={props.posts} scrollToTop={props.scrollToTop} />
    </React.Fragment>
  )
}

export default BlogPage
