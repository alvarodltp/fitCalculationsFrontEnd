import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

class CountDown extends React.Component {
  render(){

    const Completionist = () => <h4>This Sale Has Ended</h4>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <h2 style={{fontSize: "30px", color: "red"}}> 82% Sale Ends In {hours} h {minutes} min {seconds} sec</h2>;
      }
    };

    return(
      <Countdown
        date={'Thu, 30 Mar 2019 00:00:00'}
        intervalDelay={0}
        daysInHours={true}
        zeroPadTime={2}
        autoStart={true}
        renderer={renderer}
      />

    )
  }
}

export default CountDown
