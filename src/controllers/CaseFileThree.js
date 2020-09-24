import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import '../css/CaseFileThree.css';

class CaseFileThree extends React.Component {
  render() {
    return (
      <div className="CaseFileThree">
        <header>
        <h1>Case File Three</h1>
            <p>username</p>
        </header>
        <div className="canvas1">
          <Stage width={500} height={500}>
            <Layer>
              <Rect
                x={0}
                y={0}
                width={500}
                height={500}
                fill="white"
              />
            </Layer>
          </Stage>
        </div>
        <header className="CaseFileThree-header">
          <div className="case-three-full">
          <label>Answer</label>
            <p />
            <input type="text"/><button>Submit</button>
            <p>this is case file two</p>
          </div>
        </header>
      </div>
    );
  }
}

export default CaseFileThree;
