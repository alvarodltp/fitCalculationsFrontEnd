import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'

class RelatedPosts extends React.Component {


displayRelatedPosts = () => {
  let postTags = this.props.post.fields.tags
  let postsTags = Object.values(this.props.posts).map(post => post.fields.tags)
  let relatedPosts = this.props.posts.filter(post => post.fields.tags === postTags)
  console.log(relatedPosts)
  debugger
  return Object.values(relatedPosts).map(post =>

    <Grid>
      <Grid.Column width={5}>
        <Image style={{width: "300px", marginRight: "0px"}} src={post.fields.header.fields.file.url} />
      </Grid.Column>
      <Grid.Column style={{marginLeft: "0px"}} width={11}>
        <h1>{post.fields.title}</h1>
        <p>{post.fields.description}</p>
        <p style={{fontStyle: "italic"}}>By {post.fields.author}</p>
      </Grid.Column>
    </Grid>
  )
}

  render(){
    return(
      <div style={{marginTop: "70px", textAlign: "left", paddingLeft: "100px"}}>
        <h1 style={{marginBottom: "30px"}}>Related Posts</h1>
        {this.displayRelatedPosts()}
      </div>
    )
  }
}

export default RelatedPosts
