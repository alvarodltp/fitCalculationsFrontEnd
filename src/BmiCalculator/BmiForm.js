import React from 'react'
import InputRange from 'react-input-range';

const BmiForm = (props) => {
  return(
    <InputRange
      maxValue={50}
      minValue={300}
      value={props.pounds}
      onChange={props.setPounds}
      draggableTrack={true}/>

  )
}

export default BmiForm
