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
        <p style={{fontStyle: "italic", fontSize: "10px"}}>
          Hang in tight, {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}.<br/>
          We are getting your results ready. 💪
        </p>
      </div>
    )
  }
}

export default Loading
