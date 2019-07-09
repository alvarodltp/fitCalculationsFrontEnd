import React from 'react'
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class BlogItem extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Link to={`/blog/${this.props.path}`}>
          <Card
            header={this.props.title}
            meta={this.props.author}
            description={this.props.description}
          />
        </Link>
      </React.Fragment>
    )
  }
}

export default BlogItem

// {this.props.props["content"].content[0].content[0].value}
