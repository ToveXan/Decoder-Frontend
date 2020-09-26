import React, { useState, useEffect, useRef } from 'react';
import LoadCoffee from './LoadCoffee';
import '../css/CaseFileTwo.css';
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);


export default function CaseFileTwo() {
  const dragInstance1 = useRef(null);
  const dragInstance2 = useRef(null);
  const dragTarget1 = useRef(null);
  const dragTarget2 = useRef(null);
  const [timer, setTimer] = useState(0)
  const [answer] = useState("you need to go, they are coming");
  const [userAnswer, setUserAnswer] = useState('');


  useEffect(() => {
    dragInstance1.current = Draggable.create(dragTarget1.current, {
      type: "rotation",
      onDragEnd() {
        console.log("look at it go");
      }
    });
  }, []);

  useEffect(() => {
    dragInstance2.current = Draggable.create(dragTarget2.current, {
      type: "rotation",
      onDragEnd() {
        console.log("it's really spinnin'");
      }
    });
  }, []);

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

    return (
      <div className="CaseFileTwo">
        <header className="CaseFileTwo-header">
        <h1>Case File Two</h1>
            <p>username</p>
        </header>
        <LoadCoffee timer={timer}/>
        <div className="draggable">
            <img className="top" src={'https://i.ibb.co/ZTqGTgc/caesar-middle-1-3.png'} ref={dragTarget2} alt="" />
          </div>
          <div className="draggable" >
            <img className="bottom" src={'https://i.ibb.co/1Gkk1BC/caesar-top-1.png'} ref={dragTarget1}alt="" />
          </div>
          <p />

          <div className="decode">
          <h3>5 10</h3>
          <h3>DTZ SJJI YT LT, DROI KBO MYWSXQ</h3>
          </div>
          
          <div className="case-two-full">
          <label>Answer</label>
          <p />
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                onChange={e => setUserAnswer(e.target.value)} />
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
    );
  }


