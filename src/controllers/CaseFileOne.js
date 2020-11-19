import React, { useEffect, useState } from 'react';
import { Stage, Layer, Rect, Image, Line } from 'react-konva';
import '../css/CaseFileOne.css';
import LoadCoffee from './LoadCoffee'
import useImage from 'use-image';
import { withRouter } from 'react-router-dom';
import GrahamDialogue from './modal/GrahamDialogue'



function CaseFileOne() {
  const [answer] = useState("rendezvous at midnight by the river");
  const [lines, setLines] = useState([]);
  const isDrawing = React.useRef(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [timer, setTimer] = useState(0)
  const defaults = []
  const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pigpen_cipher_key.svg/1200px-Pigpen_cipher_key.svg.png'
  const [image] = useImage(url);
  const [show, setShow] = useState(false)
  // const winner = <img className="winner" src="https://i.ibb.co/LJSfH3g/kisspng-stock-photography-royalty-free-stock-illustration-case-closed-transparent-png-5a781c5dacaed2.png"/>
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
      "https://double-cryptography-api.herokuapp.com/api/v1/graham_ones"
      // "http://localhost:4000/api/v1/graham_ones"
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
      alert("Now we're talkin'! You got it!")
      setTimer(timer + 0)
    }else if (userAnswer !== answer) {
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
      <div className="case-one">
        <div className="headertop">
          <header>
            <h1>Case File One</h1>
            {/* {winner} */}
          </header>
          <div className="game-state">
            <p>Tove</p>
            <LoadCoffee setTimer={setTimer} timer={timer}/>
          </div>
        </div>
          <button className="btn" id="graham-btn" onClick={() => setShow(true)}>Talk To Graham</button>
        <div className="body-div">
          <div className="canvas1">
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
                  
                />
              </Layer>
              {loadImage()}
              <Layer>
                {lines.map((line, i) => (
                  <Line key={i} id={i} points={line} stroke="red" />
                    ))}
              </Layer>
            </Stage>
          <button className="btn" id="clr-btn" onClick={deleteLine}>Clear</button>
          </div>
            <div>
              <p><img src="https://i.ibb.co/QpqK2Dp/Screen-Shot-2020-11-19-at-4-56-19-PM.png"></img></p>
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

export default withRouter(CaseFileOne);