import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './BlogItem'

class Blog extends React.Component {
  constructor(){
    super()
    this.state={
      posts: []
    }
  }

  client = contentful.createClient({
    space: '3pn0fc4ta32y',
    accessToken: 'O7n9vC7nnluKegqPfYuD78Cbt3a0sEHXznkuK_HRdl8'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    let postsObj = response.items.map(blog => blog.fields).map(post => post.content).map(item => item.content)
    debugger
    this.setState({
      posts: response.items
    })
  }

  render(){
    return(
      <div>
      { this.state.posts.map(({fields}, i) => <BlogItem key={i} {...fields} /> )}
     </div>
    )
  }
}

export default Blog
