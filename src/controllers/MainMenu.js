import React, { useEffect, useState } from 'react';
import MainDialogue from './modal/MainDialogue'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/MainMenu.css';



function MainMenu() {
const [users, setUsers] = useState([]);
const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    fetch('http://localhost:4000/api/v1/users')
    .then(resp => resp.json())
    .then(users  => setUsers(users));
 }, []);

  const grabUser = () => {
    return users.map(i => i.username)
  }

    return (
      <div className="main-menu">
          <div className="inner-div">
            <h3>Detective {grabUser()}</h3>
            </div>
            <div className="modal-start">
              <button className="talk-btn" onClick={() => setIsOpen(true)}>Talk to Graham</button>
              <MainDialogue open={isOpen} onClose={() => setIsOpen(false)}>
                Wowee
              </MainDialogue>
            </div>
      </div>
    );
  }


export default MainMenu;
