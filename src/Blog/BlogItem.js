import React from 'react'
import {Card, Grid, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class BlogItem extends React.Component {

displayBlogs = () => {
  return <Link to={`/blog/${this.props.path}`}>
    <Grid style={{margin: "0 auto"}}>
        <Grid.Column width={5}>
          <Image style={{width: "300px", marginRight: "0px"}} src={this.props.header.fields.file.url} />
        </Grid.Column>
        <Grid.Column style={{marginLeft: "0px"}} width={11}>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <p style={{fontStyle: "italic"}}>By {this.props.author}</p>
        </Grid.Column>
    </Grid>
  </Link>
}

  render(){
    return(
      <div style={{marginBottom: "30px"}}>
        {this.displayBlogs()}
      </div>
    )
  }
}

export default BlogItem
