import star from './star.svg';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Stars.css';
import Star from './Star';


    // const Star = ({x, y, s}) => {

    //     const handleClick = () => {
    //         alert("hello");
    //     } 

    //     return (
    //         <motion.img
    //             src={star}
    //             className='star-logo'
    //             initial={{ opacity: 0, scale: 0 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{
    //                 duration: 0.4,
    //                 scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    //             }}
    //             style={{
    //                 position: 'absolute',
    //                 left: `${x}px`,
    //                 top: `${y}px`,
    //                 width: `${s}px`,
    //                 height: `${s}px`,
    //                 pointerEvents: "all",
    //                 filter: "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5))",
    //                 background: "none", // Ensures no background styling
    //                 border: "none"
    //             }}
    //             onClick={handleClick}
    //         />
    //     )
    // };




function Stars() {
    const valueRef = useRef('');
    const [stars, setStars] = useState([]);
    const [datalength, setdatalength] = useState([0])

    const getRandomPosition = () => {
        const x = Math.floor(Math.random() * window.innerWidth);  // Random x within window width
        const y = Math.floor(Math.random() * window.innerHeight); // Random y within window height
        const s = Math.floor(Math.random() * 60) + 10;
        return { x, y, s };
    };

    // const addStar = () => {
    //     const {x, y, s} = getRandomPosition();
    //     setStars([...stars, <Star key={stars.length} x={x} y={y} s={s}/>]);
    // }

    const addStar = async (id, thought, tags)  => {
        const {x, y, s} = getRandomPosition();
        console.log(valueRef.current.value)

        var requestOptions = {
            method : "POST",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                "id": datalength + 1, // change thisss  
                "thought": valueRef.current.value,
                "tag": tags
            })
        }

        try{ 
            await fetch("http://localhost:3000/Thoughts", requestOptions)
        } catch (e) {
            
        }

        setStars(prevStars => {
            if (prevStars.find(star => star.props.id === id)) return prevStars; // Prevent duplicates
            return [...prevStars, <Star id={id} thought={thought} tags={tags} key={id} x={x} y={y} s={s}/>];
        });
        setdatalength(datalength + 1)
    };

    const loadStar = (id, thought, tags)  => {
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
            setdatalength(resultJSON.length)
            console.log(resultJSON.length)
            resultJSON.forEach(elm => {
                // console.log(elm.id, elm.thought, elm.tags);
                loadStar(elm.id, elm.thought, elm.tags);
            });
        } catch (e) {
            
        }

    }

    useEffect(()=> {
        getStars();
    },[])

    return (
        <div className="Stars">
            <header className="Star-header"></header>

            <div className="star-container">
                {stars}
            </div>

            <div className="Textbox">
                <input
                    type="text"
                    ref={valueRef}
                    placeholder="Enter your thoughts..."
                />
                <button type="button" className="button" onClick={addStar}>Submit</button>
            </div>

        </div>
    );
}

export default Stars;
