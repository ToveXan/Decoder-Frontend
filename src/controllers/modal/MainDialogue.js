import React, { useEffect, useState } from 'react';
import './MainDialogue.css'

export default function MainDialogue({ open, onClose, setIsOpen }) {
    const [lines, setLines] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        fetchItems();
      }, []);
    
    const fetchItems = async () => {
        const data = await fetch(
          "https://double-cryptography-api.herokuapp.com/api/v1/graham_mains"
        );
        const lines = await data.json();
        setLines(lines);
      };

      const closeModalHandler = () => {
        setIsOpen(false)
        setCount(0)
      }

      const grabLines = () => {
        const line = lines.map(i => i.description)
        if(count === 0) {
            return <p>{line[0]}</p>
        }else if(count === 1){
            return <p>{line[1]}</p>
        }else if(count === 2){
            return <p>{line[2]}</p>
        }else if(count === 3){
            return <p>{line[3]}</p>
        }else if(count === 4){
            return <p>{line[4]}</p>
        }else if(count === 5){
            return <p>{line[5]}</p>
        }else if(count === 7){
            return <p>...what?</p>
        }
      }

    
  return (
        <div className="main-wrapper"
            style={{
                transform: open ? 'translateY(-0vh' : 'translateY(100vh)',
                opacity: open ? '1' : '0'
            }}
        >
            <div className="main-header">
                <p>Graham</p> <button id="cls-btn"
                    onClick={closeModalHandler}>x</button>
            </div>
            <div className="main-content">
                <div className="main-body">
                   {grabLines()}
                </div>
                <div className="main-footer">
                    <button className="btn" 
                    onClick={() => setCount(count+1)}>Next</button>
                </div>
            </div>
        </div>
      
  )
}
