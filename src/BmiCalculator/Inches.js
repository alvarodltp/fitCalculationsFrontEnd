import React from 'react'
import { Range, getTrackBackground } from 'react-range';

const STEP = 1;
const MIN = 0;
const MAX = 11;

class Inches extends React.Component {
  state = {
    values: [0]
  };
  render() {
    return (

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <h4>Inches</h4><br/>
        <Range
          values={this.props.inches}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={this.props.setInches}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '40px',
                display: 'flex',
                width: '100%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '2px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: this.props.inches,
                    colors: ['#548BF4', '#ccc'],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '30px',
                width: '30px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: '#548BF4'
                }}
              >
                {this.props.inches[0].toFixed(1)}
              </div>
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : '#CCC'
                }}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Inches
