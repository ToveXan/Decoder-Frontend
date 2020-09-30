import React from 'react';
//import Typist from 'react-typist';
import './GrahamDialogue.css'


export default function GrahamDialogue({ show, close, next, setNext }) {

    const test = <p className="typewriter">or maybe render this?</p>
    return (
        <div className="modal-wrapper"
            style={{
                transform: show ? 'translateY(-0vh' : 'translateY(100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="modal-header">
                <p>Graham</p>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                   { next ? test :  <p className="typewriter">Hey, kid. So it looks like it's workin' so far, but we still got a long way to go.</p> }
                </div>
                <div className="modal-footer">
                    <button className="btn" 
                    onClick={() => setNext(true)}>Next</button>
                    <button className="btn" 
                    onClick={close}> Close</button>
                </div>
            </div>
        </div>
        
    );
    
    
    
    
    
    
    
    
    
    
    
    // const [show, setShow] = useState(false);
    // const handleClose = () => {
    //   setShow(false)
    // }
    // const handleShow = () => {
    //   setShow(true)
    // }
  
    // return (
    //   <>
    //   <Button onClick={handleShow}>
    //     Talk to Graham
    //   </Button>

    //   <Modal show={show} onHide={handleClose}>
    //     <ModalHeader>
    //         Graham
    //       </ModalHeader>
    //       <ModalBody>
    //         Hey, kid.
    //       </ModalBody>
    //       <ModalFooter>
    //         <Button onClick={handleClose}>
    //           close
    //         </Button>
    //       </ModalFooter>
    //     </Modal>
    //   </>
    // );

}
