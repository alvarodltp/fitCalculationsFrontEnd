import React from 'react'
import { BeatLoader } from 'react-spinners';

class Loading extends React.Component {
  render(){
    return(
      <div id="loading">
        <div className='sweet-loading'>
          <BeatLoader
            sizeUnit={"px"}
            size={13}
            color={this.props.gender === "Female" ? '#e80aaa' : '#2761f1'}
            loading={this.props.loading}
          />
        </div>
        <p style={{fontStyle: "italic", fontSize: "12px"}}>
          Loading Results
        </p>
      </div>
    )
  }
}

export default Loading
