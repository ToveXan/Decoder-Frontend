import React, { useState } from 'react';
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
  const [ next, setNext] = useState(false)
  //let winner = <img className="winner" src="https://i.ibb.co/LJSfH3g/kisspng-stock-photography-royalty-free-stock-illustration-case-closed-transparent-png-5a781c5dacaed2.png"/>

  
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
  const cancelInput = () => { 
    document.getElementById("answer-form").reset();
  }

  
  const closeModalHandler = () => { 
    setShow(false)
    setNext(false)
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
            <LoadCoffee timer={timer}/>
          </div>
        </div>
          <button className="btn" onClick={() => setShow(true)}>Talk To Graham</button>
        <div className="body-div">
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
          <button className="btn" onClick={deleteLine}>Clear</button>
          </div>
            <div>
              <h3 className="test">rendezvous at midnight by the river</h3>
              <form id="answer-form" onSubmit={handleSubmit}>
              <label>Answer</label>
                <input 
                  type="text" 
                  onChange={e => setUserAnswer(e.target.value)} />
                <button className="btn" type="submit" onClick={cancelInput}>Submit</button>
              </form>
            </div>
        </div>
        { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
            <GrahamDialogue show={show} close={closeModalHandler} next={next} setNext={setNext} />
      </div>
    );
}

export default withRouter(CaseFileOne);