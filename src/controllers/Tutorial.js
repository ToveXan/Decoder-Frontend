import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Image, Line } from 'react-konva';
import LoadCoffee from './LoadCoffee'
import '../css/Tutorial.css';
import useImage from 'use-image';
import GrahamDialogue from './modal/GrahamDialogue'


function Tutorial() {
  const [answer] = useState("Hello, world.");
  const [timer, setTimer] = useState(0)
  const [lines, setLines] = useState([]);
  const isDrawing = React.useRef(false);
  const [userAnswer, setUserAnswer] = useState('');
  const defaults = []
  const scan1 = "https://i.ibb.co/FJC0QV4/Postman-Scan.png"
  const scan2 = "https://i.ibb.co/fFfZf7T/Postman-Scan2.png"
  const [image1] = useImage(scan1);
  const [image2] = useImage(scan2);
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
      "https://double-cryptography-api.herokuapp.com/api/v1/graham_tutorials"
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
        return <p>{gLine[10]}</p>
    }else if(count === 11){
      return <p>....What?</p>
    }
  }

  const loadImageOne = () => {
    return <Layer>
      <Image 
      x={5} 
      y={0}
      width={250}
      height={383}
      image={image1} 
      />
    </Layer>
  }
  const loadImageTwo = () => {
    return <Layer>
      <Image 
      x={350} 
      y={0}
      width={250}
      height={378}
      image={image2} 
      />
    </Layer>
  }

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, [pos.x, pos.y]]);
  };
  const cancelInput = () => { 
    document.getElementById("answer-form").reset();
  }

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
      alert("Now we're talkin'! You got it!")
      setTimer(timer + 0)
    }else if (userAnswer !== answer) {
      console.log(userAnswer)
      console.log("That's not quite right....")
      setTimer(timer + 1)
    } else {
      console.log("somethin' aint right")
    }
  }

  return (
    <div className="tutorial">
        <div className="headertop">
        <header>
            <h1>Tutorial</h1>
          </header>
          <div className="game-state">
            <p>Tove</p>
            <LoadCoffee setTimer={setTimer} timer={timer}/>
          </div>
        </div>
          <button className="btn" id="graham-btn" onClick={() => setShow(true)}>Talk To Graham</button>
        <div className="body-div">
          <div className="tut-canvas">
            <Stage 
            width={655} 
            height={387}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
            >
              <Layer>
                <Rect
                  x={0}
                  y={0}
                  width={655}
                  height={387}
                  fill="white"
                />
              </Layer>
              {loadImageOne()}
              {loadImageTwo()}
              <Layer>
              {lines.map((line, i) => (
                <Line key={i} id={i} points={line} stroke="red" />
                  ))}
            </Layer>
            </Stage>
          </div>
          <button className="btn" id="clr-btn" onClick={deleteLine}>Clear</button>
        <div className="decode">
          <h3>52:10:1  128:13:4<br />
              52:10:2 128:13:5<br />
            </h3>
          </div>
          <div className="tutorial-full">
            <form id="answer-form" onSubmit={handleSubmit}>
              <input 
                    className="txt-input"
                    type="text" 
                    placeholder="Answer"
                    onChange={e => setUserAnswer(e.target.value)} />
                    <p />
                  <button className="btn" id="submit-btn" type="submit" onClick={cancelInput}>Submit</button>
            </form>
          </div>
          </div>
          { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
            <GrahamDialogue show={show} close={closeModalHandler} count={count} setCount={setCount}>
              {grabLines()}
            </GrahamDialogue>
            
      </div>
  );
}

export default Tutorial;
