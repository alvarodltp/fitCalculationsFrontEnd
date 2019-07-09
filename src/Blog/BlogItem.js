import React from 'react'
import {Card, Grid, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class BlogItem extends React.Component {

displayBlogs = () => {
  return <Grid>
    <Grid.Column>
      <Link to={`/blog/${this.props.path}`}>
        <Card onClick={this.props.scrollToTop} id="image">
          <Image src={this.props.header.fields.file.url}/>
          <Card.Content style={{margin: "0 auto", width: "100%", background: "lightgray"}}>
            <Card.Header style={{color: "black"}}>{this.props.title}</Card.Header>
            <Card.Description style={{color: "black"}}>
              {this.props.description}
            </Card.Description>
          </Card.Content>
          {this.props.tags.map(tag =>
            <Card.Content extra style={{display: "inline-block", margin: "0 auto"}}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </Card.Content> )}
        </Card>
      </Link>
    </Grid.Column>
  </Grid>
}


  render(){
    return(
      <div style={{display: "inline-block"}}>
        {this.displayBlogs()}
      </div>
    )
  }
}

export default BlogItem
