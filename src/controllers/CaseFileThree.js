import React, { useState } from 'react';
import { Stage, Layer, Rect, Image, Line } from 'react-konva';
import '../css/CaseFileThree.css';
import useImage from 'use-image';
import LoadCoffee from './LoadCoffee'

export default function CaseFileThree() {
  const [answer] = useState("compromised new hideout fischer building");
  const url = 'https://i.ibb.co/7vSdsGS/gumshoe.png'
  const [image] = useImage(url);
  //const [setImage] = useState(new window.Image());
  const [lines, setLines] = useState([]);
  const isDrawing = React.useRef(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(0)
  const defaults = []
  
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
    setLines(defaults)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userAnswer === answer){
      console.log("Now you got it!")
      setTimer(timer + 0)
    }else if (userAnswer !== answer) {
      console.log(userAnswer)
      console.log("That's not quite right....")
      setTimer(timer + 1)
    } else {
      console.log("somethin' aint right")
    }
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
            <h1>Case File Three</h1>
            <p>username</p>
          </header>
          <LoadCoffee timer={timer}/>
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
          {loadImage()}
          <Layer>
            {lines.map((line, i) => (
              <Line key={i} id={i} points={line} stroke="red" />
                ))}
          </Layer>
        </Stage>
        <button onClick={deleteLine}>Clear</button>
        <p />

          <div className="decode">
          <h3>OEQUBNAQBUVI OPUZKFAEPH IKBHCUY KFMDFQDVM</h3>
          </div>
        </div>
          <div>
            <p />
            <form onSubmit={handleSubmit}>
            <label>Answer</label>
            <p />
            <input 
              type="text" 
              onChange={e => setUserAnswer(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
          </div>
      </div>
    );
}