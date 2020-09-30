import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Image, Line } from 'react-konva';
import '../css/CaseFileThree.css';
import useImage from 'use-image';
import LoadCoffee from './LoadCoffee'
import GrahamDialogue from './modal/GrahamDialogue'

export default function CaseFileThree() {
  const [answer] = useState("compromised new hideout fischer building");
  const url = 'https://i.ibb.co/7vSdsGS/gumshoe.png'
  const [image] = useImage(url);
  const [lines, setLines] = useState([]);
  const isDrawing = React.useRef(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(0)
  const defaults = []
  const [show, setShow] = useState(false)
  const [gLines, setGLines] = useState([]);
  const [count, setCount] = useState(0);

  const closeModalHandler = () => {
    setShow(false)
    setCount(0)
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "http://localhost:4000/api/v1/graham_threes"
    );
    const gLines = await data.json();
    setGLines(gLines);
  };
  
  const grabLines = () => {
    const gLine = gLines.map(i => i.description)
    if(count === 0) {
        return <p>{gLine[0]}</p>
    }else if(count === 1){
        return <p>{gLine[1]}</p>
    }else if(count === 2){
        return <p>{gLine[2]}</p>
    }else if(count === 3){
        return <p>{gLine[3]}</p>
    }else if(count === 4){
        return <p>{gLine[4]}</p>
    }else if(count === 5){
        return <p>{gLine[5]}</p>
    }else if(count === 6){
        return <p>{gLine[6]}</p>
    }else if(count === 7){
        return <p>{gLine[7]}</p>
    }else if(count === 8){
        return <p>{gLine[8]}</p>
    }else if(count === 9){
        return <p>{gLine[9]}</p>
    }else if(count === 10){
      return <p>....What?</p>
    }
  }

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
      x={0} 
      y={0}
      width={400}
      height={400}
      image={image} 
      />
    </Layer>
  }

  const cancelInput = () => { 
    document.getElementById("answer-form").reset();
  }

    return (
      <div className="case-three">
        <div className="headertop">
          <header>
            <h1>Case File Three</h1>
          </header>
          <div className="game-state">
            <p>Tove</p>
            <LoadCoffee setTimer={setTimer} timer={timer}/>
          </div>
        </div>
          <button className="btn" onClick={() => setShow(true)}>Talk To Graham</button>
        <div className="body-div">
            <div className="canvasThree">
              <Stage 
              width={400} 
              height={400}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              >
              <Layer>
                <Rect
                  x={0}
                  y={0}
                  width={400}
                  height={400}
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
          <button className="btn" onClick={deleteLine}>Clear</button>
          </div>
          <div className="decode">
            <h3>OEQUBNAQBUVI OPUZKFAEPH IKBHCUY KFMDFQDVM</h3>
          </div>
            <div>
              <form id="answer-form" onSubmit={handleSubmit}>
              <label>Answer</label>
              <input 
                type="text" 
                onChange={e => setUserAnswer(e.target.value)} />
              <button className="btn" type="submit" onClick={cancelInput}>Submit</button>
              </form>
            </div>
          { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
          <GrahamDialogue show={show} close={closeModalHandler} count={count} setCount={setCount}>
              {grabLines()}
            </GrahamDialogue>
            </div>
        
      </div>
    );
}