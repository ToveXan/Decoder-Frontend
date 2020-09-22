import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import '../css/CaseFileTwo.css';

class CaseFileTwo extends React.Component {
  render() {
    return (
      <div className="CaseFileTwo">
        <header>
        <h1>Case File Two</h1>
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
                fill="grey"
              />
            </Layer>
            <Layer>
              <Text 
              x={20}
              y={20}
              draggable
              text="this is a test"
               />
            </Layer>
          </Stage>
        </div>
        <header className="CaseFileTwo-header">
          <div className="case-two-full">
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

export default CaseFileTwo;
