import React, { useEffect, useState } from 'react';

import { Stage, Layer, Rect, Text, Image, Line } from 'react-konva';
import '../css/CaseFileOne.css';


export default function CaseFileOne() {
  
  const [image, setImage] = useState(new window.Image());
  let [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pigpen_cipher_key.svg/1200px-Pigpen_cipher_key.svg.png";
    setImage(img);
  }, []);
  
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, [pos.x, pos.y]]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine = lastLine.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const deleteLine = (e) => {
    console.log(lines)
    
  }

  const pigpenInCanvas = () => {
    return <Layer>
        <Text 
        x={5}
        y={430}
        fontSize={20}
        draggable
        fontFamily={"pigpen_cipherregular"}
        text="abcdefghijklmnopqrstuvwxyz"
        />
      </Layer>
  }

  const loadImage = () => {
    return <Layer>
      <Image 
      x={20} 
      y={20}
      width={400}
      height={400}
      image={image} 
      />
    </Layer>
  }
  
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
        <Stage 
        width={500} 
        height={500}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        >
          <Layer>
            <Rect
              x={0}
              y={0}
              width={500}
              height={500}
              fill="white"
            />
          </Layer>
          {pigpenInCanvas()}
          {loadImage()}
          <Layer>
            {lines.map((line, i) => (
              <Line key={i} id={i} points={line} stroke="red" />
                ))}
          </Layer>
        </Stage>
        <button onClick={deleteLine}>Reset</button>
        </div>
          <div>
            <label>Answer</label>
            <p />
            <input type="text"/><button>Submit</button>
            <p className="test">testing</p>
            <p>app carried down the font styling for pigpen</p>
          </div>
      </div>
    );
}

