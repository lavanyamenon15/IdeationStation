import star from './star.svg';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';
import background from './bg2.png';
import Star from './Star';


function Stars() {
    const [stars, setStars] = useState([]);

    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * window.innerWidth);  // Random x within window width
        const y = Math.floor(Math.random() * window.innerHeight); // Random y within window height
        return { x, y };
    };

    // const addStar = event  => {
    //     const {x, y} = getRandomPosition();
    //     setStars(stars.concat(<Star key={stars.length} x={x} y={y}/>));
    // };

    const addStar = (id, thought, tags)  => {
        console.log('addStar called for:', id);
        const {x, y} = getRandomPosition();
        setStars(prevStars => {
            if (prevStars.find(star => star.props.id === id)) return prevStars; // Prevent duplicates
            return [...prevStars, <Star id={id} thought={thought} tags={tags} key={id} x={x} y={y} />];
        });
    };


    const getStars = async () => {
        var requestOptions = {
            method : "GET",
            redirect: "follow"
        }

        try{ 
            var result = await fetch("http://localhost:3000/Thoughts", requestOptions)
            var resultJSON = await result.json()
            console.log(resultJSON.length)
            resultJSON.forEach(elm => {
                console.log(elm.id, elm.thought, elm.tags);
                addStar(elm.id, elm.thought, elm.tags);
            });
        } catch (e) {
            
        }

    }

    useEffect(()=> {
        getStars();
    },[])

    return (
        <div className="Stars">
            <header className="App-header" style={{backgroundImage: `url(${background})`}}>
            </header>

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
