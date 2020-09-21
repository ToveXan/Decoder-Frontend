import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import '../css/CaseFileThree.css';

class CaseFileThree extends React.Component {
  render() {
    return (
      <div className="CaseFileTwo">
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
        <header className="CaseFileTwo-header">
          <div className="case-two-full">
            <p>this is case file two</p>
          </div>
        </header>
      </div>
    );
  }
}

export default CaseFileThree;
