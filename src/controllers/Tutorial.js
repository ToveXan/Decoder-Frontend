import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';
import LoadCoffee from './LoadCoffee'

function Tutorial() {
  const [timer, setTimer] = useState(0)

  return (
    <div className="Tutorial">
        <header>
        <h1>Tutorial</h1>
            <p>username</p>
        </header>
        <LoadCoffee timer={timer}/>
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
        <header className="Tutorial-header">
          <div className="tutorial-full">
          <label>Answer</label>
            <p />
            <input type="text"/><button>Submit</button>
            <p>this is case file two</p>
          </div>
        </header>
      </div>
  );
}

export default Tutorial;
