import star from './star.svg';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';
import background from './bg2.png';
import Modal from './Modal';


const Star = ({id, thought, tags, x, y, s}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
     
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            <motion.img
            src={star}
            className='star-logo'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            drag
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: `${s}px`,
                height: `${s}px`,
                pointerEvents: "all",
                filter: "drop-shadow(6px 6px 10px rgba(0, 0, 0, 0.5))",
                background: "none", // Ensures no background styling
                border: "none"
            }}
            onClick={toggleModal}
            />

            {isModalOpen && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <p>
                    Thought: {thought}
                    <br></br>
                    Tags: {tags}
                    </p>
                    <button className="close-modal" onClick={toggleModal}>
                    X
                    </button>
                </div>
                </div>
            )}
        </div>
        
    )
};

export default Star;
