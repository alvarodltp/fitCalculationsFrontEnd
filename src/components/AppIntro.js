import React from 'react'
import { Grid, Image, Card } from 'semantic-ui-react'

class AppIntro extends React.Component {
  render(){
    return(
      <Card id="info-card">
        <Image id="image" size="tiny" src='https://pbs.twimg.com/profile_images/3577326786/0869e4e83242f3e77648f71bc03e0b44_400x400.jpeg' circular/>
        <p id="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Card>
    )
  }
}

export default AppIntro
