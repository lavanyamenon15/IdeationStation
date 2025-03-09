import React, { useState } from "react";
import "./Modal.css";

export default function Modal({currID, currThought, currTag, modalState}) {
  const [modal, setModal] = useState(modalState);
 
 
  const toggleModal = () => {
    setModal(!modal);
  };
 
 
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
 
 
  return (
    // !!! Change the button to clicking the stars for the popup to come up
    <>
 
 
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p>
              Thought ID: {currID}
              <br></br>
              Thought: {currThought}
              <br></br>
              Tags: {currTag}
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
 }
 