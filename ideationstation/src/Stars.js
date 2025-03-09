import star from './star.svg';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';


const Star = () => {
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
    />)

    // <img src={star} className="star-logo" alt="logo" />
};

function Stars() {
    const [stars, setStars] = useState([]);

    const addStar = event => {
        setStars(stars.concat(<Star key={stars.length}/>));
    };

    return (
        <div className="Stars">
            <header className="App-header">
                <button type="button" className="button" onClick={addStar}></button>
                <div className="star-container">
                    {stars}
                </div>
            </header>
        </div>
    );
}

export default Stars;
