import React, { useEffect, useState } from 'react';
import MainDialogue from './modal/MainDialogue'
import '../css/MainMenu.css';
import GrahamImage from './GrahamImage'


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
              <button className="talk-btn" onClick={() => setIsOpen(true)}>Introduce Yourself</button>
              </div>
              <div className="graham-image">
                <GrahamImage height={650} />
              </div>
              <MainDialogue open={isOpen} setIsOpen={setIsOpen} onClose={() => setIsOpen(false)}>
              </MainDialogue>
          </div>
      );
  }


export default MainMenu;
