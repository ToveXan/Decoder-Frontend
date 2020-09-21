import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import '../css/CaseFileOne.css';


class CaseFileOne extends React.Component {
  
  render() {
    return (
      <div className="CaseFileOne">
        <div className="headertop">
          <header>
            <h1>Case File One</h1>
            <p>username</p>
          </header>
          <p>< i className="flaticon-coffee"></i></p>
        </div>
        <div className="canvas1">
        <Stage width={500} height={500}>
          <Layer>
            <Rect
              x={0}
              y={0}
              width={500}
              height={500}
              fill="grey"
            />
          </Layer>
        </Stage>
        </div>
          <div>
            <p>this is case file one</p>
            <p className="test">testing</p>
            <p>app carried down the font styling for pigpen</p>
          </div>
      </div>
    );
  }
}

export default CaseFileOne;
