import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Image, Circle } from 'react-konva';

import LoadCoffee from './LoadCoffee';
import '../css/CaseFileTwo.css';


export default function CaseFileTwo() {
  const [timer] = useState(0)
  const [imageOne, setImageOne] = useState(new window.Image());
  const [imageTwo, setImageTwo] = useState(new window.Image());
  const [x, setX] = useState(70)
  const [y, setY] = useState(100)


  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://i.ibb.co/4f3QXjH/caesar-middle-1.png";
    setImageOne(img);
  }, []);

  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://i.ibb.co/1Gkk1BC/caesar-top-1.png";
    setImageTwo(img);
  }, []);
  const handleDragEnd = (e) => {
    setX(e.target.x())
    setY(e.target.y())
  }

  const caesarOuter = () => {
    return <Layer>
      
        <Image 
        name="ceasar-outer"
        x={x} 
        y={y}
        width={402}
        height={402}
        draggable
        image={imageTwo}
        
        //rotation={Math.random() * 180}
        
        />
      </Layer>
  }
  const caesarMid = () => {
    return <Layer>
      <Image 
      name="caesar-mid"
      x={122.5} 
      y={150}
      width={300}
      height={300}
      image={imageOne} 
      />
      <Circle 
        x={271.5}
        y={302.5}
        radius={3}
        fill={"#555"}
        />
    </Layer>
  }

    return (
      <div className="CaseFileTwo">
        <header>
        <h1>Case File Two</h1>
            <p>username</p>
        </header>
        <LoadCoffee timer={timer}/>
        <div className="canvas1">
          <Stage width={600} height={600}>
            <Layer>
              <Rect
                x={0}
                y={0}
                width={600}
                height={600}
                fill="white"
              />
            </Layer>
            {caesarOuter()}
            {caesarMid()}

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