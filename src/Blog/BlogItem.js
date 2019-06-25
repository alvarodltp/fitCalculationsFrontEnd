import React from 'react'
import {Card} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class BlogItem extends React.Component {
  render(){
    return(
      <React.Fragment>
          <Card
            header={this.props.fields.title}
            meta={this.props.fields.author}
            description={this.props.fields.description}
          />
      </React.Fragment>
    )
  }
}

export default BlogItem

// {this.props.props["content"].content[0].content[0].value}
