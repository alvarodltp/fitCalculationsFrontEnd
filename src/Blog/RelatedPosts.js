import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class RelatedPosts extends React.Component {

displayRelatedPosts = () => {
  let postTags = this.props.post.fields.tags
  let postsTags = Object.values(this.props.posts).map(post => post.fields.tags)
  let relatedPosts = this.props.posts.filter(post => post.fields.tags === postTags)

  return Object.values(relatedPosts).map((post, i) =>
    <Link to={`/blog/${post.fields.path}`}>
      <Grid stackable columns={2}>
          <Grid.Column width={5}>
            <Image className="image-related-post" src={post.fields.header.fields.file.url} />
          </Grid.Column>
          <Grid.Column width={11}>
            <h1 className="title-related-post">{post.fields.title}</h1>
            <p>{post.fields.description}</p>
            <p style={{fontStyle: "italic"}}>By {post.fields.author}</p>
          </Grid.Column>
      </Grid>
    </Link>
  )
}

  render(){
    return(
      <div className="related-post-section">
        <h1 className="related-post-heading">Related Posts</h1>
        {this.displayRelatedPosts()}
      </div>
    )
  }
}

export default RelatedPosts
