import star from './star.svg';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';
import background from './bg2.png';


const Star = ({x, y}) => {
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

function Stars() {
    const [stars, setStars] = useState([]);

    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * window.innerWidth);  // Random x within window width
        const y = Math.floor(Math.random() * window.innerHeight); // Random y within window height
        return { x, y };
    };

    const addStar = event => {
        const { x, y } = getRandomPosition();
        setStars(stars.concat(<Star key={stars.length} x={x} y={y}/>));
    };

    return (
        <div className="Stars">
            <header className="App-header" style={{backgroundImage: `url(${background})`}}>
                <button type="button" className="button" onClick={addStar}></button>
            </header>

            <div className="star-container">
                    {stars}
            </div>
        </div>
    );
}

export default Stars;
