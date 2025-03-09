import star from './star.svg';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';
import background from './bg2.png';


const Star = ({id, thought, tags, x, y}) => {
    return (
    <motion.img
        src={star}
        className='star-logo'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            width: '50px',  // Adjust the size of the star if necessary
            zIndex: 10,
        }}
    />)

    // <img src={star} className="star-logo" alt="logo" />
};

export default Star;
