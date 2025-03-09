import star from './star.svg';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';


function Stars() {
    const Star = ({x, y, s}) => {

        const handleClick = () => {
            alert("hello");
        } 

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
                    width: `${s}px`,
                    height: `${s}px`,
                    pointerEvents: "all",
                    filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
                    background: "none", // Ensures no background styling
                    border: "none"
                }}
                onClick={handleClick}
            />
        )
    };

    const [stars, setStars] = useState([]);

    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * window.innerWidth);  // Random x within window width
        const y = Math.floor(Math.random() * window.innerHeight); // Random y within window height
        const s = Math.floor(Math.random() * 60) + 10;
        return { x, y, s };
    };

    const addStar = () => {
        const {x, y, s} = getRandomPosition();
        setStars([...stars, <Star key={stars.length} x={x} y={y} s={s}/>]);
    };

    return (
        <div className="Stars">
            <header className="Star-header"></header>

            <div className="star-container">
                {stars}
            </div>

            <div className="Textbox">
                <input
                    type="text"
                    placeholder="Enter your thoughts..."
                />
                <button type="button" className="button" onClick={addStar}>Submit</button>
            </div>

        </div>
    );
}

export default Stars;
