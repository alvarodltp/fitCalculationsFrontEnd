import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

class CountDown extends React.Component {
  render(){

    const Completionist = () => <h4></h4>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <h3 style={{fontSize: "20px", color: "red"}}> 82% Sale Ends In {days} Days {hours} h {minutes} min {seconds} sec</h3>;
      }
    };

    return(
      <Countdown
        date={'Sun, 8 Apr 2019 00:00:00'}
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
