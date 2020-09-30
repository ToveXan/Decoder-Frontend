import React from 'react'
import './MainDialogue.css'

export default function MainDialogue({ open, onClose, children }) {

  return (
        <div className="main-wrapper"
            style={{
                transform: open ? 'translateY(-0vh' : 'translateY(100vh)',
                opacity: open ? '1' : '0'
            }}
        >
            <div className="main-header">
                <p>Graham</p>
            </div>
            <div className="main-content">
                <div className="main-body">
                   <p>Alright, so I take it you're the new kid? You know, From the head office? Did they fill you in at all or- hm.</p>
                   

                </div>
                <div className="main-footer">
                    <button className="btn" 
                    onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
      
  )
}
