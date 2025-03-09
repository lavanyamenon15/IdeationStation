import React, { useState, useEffect, useRef } from 'react';
import './Stars.css';
import Star from './Star';
import { MultiSelect } from 'primereact/multiselect';
        

function Stars() {
    const valueRef = useRef('');
    const [stars, setStars] = useState([]);
    const [datalength, setdatalength] = useState([0])
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const getRandomPosition = () => {
        const x = Math.floor(250 + Math.random()* (window.innerWidth  - 300));  // Random x within window width
        const y = Math.floor(50 + Math.random() * (window.innerHeight - 200)); // Random y within window height
        const s = Math.floor(Math.random() * 60) + 20;
        return { x, y, s };
    };

    // const addStar = () => {
    //     const {x, y, s} = getRandomPosition();
    //     setStars([...stars, <Star key={stars.length} x={x} y={y} s={s}/>]);
    // }

    const addStar = async (id, thought, tags)  => {
        const {x, y, s} = getRandomPosition();
        console.log(valueRef.current.value)
        tags = selectedTags.map((e) => e.name)
        console.log(tags)

        var requestOptions = {
            method : "POST",
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                "id": (String) (datalength + 1), 
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
            return [...prevStars, <Star id={id} thought={valueRef.current.value} tags={JSON.stringify(tags)} key={id} x={x} y={y} s={s} modalState={false}/>];
        });
        setdatalength(datalength + 1)
        setSelectedTags()
        valueRef.current.value = ""
    };

    const loadStar = (id, thought, tags)  => {
        const {x, y} = getRandomPosition();
        setStars(prevStars => {
            if (prevStars.find(star => star.props.id === id)) return prevStars; // Prevent duplicates
            return [...prevStars, <Star id={id} thought={thought} tags={(String)(tags)} key={id} x={x} y={y} modalState={false} />];
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
            // console.log(resultJSON.length)
            resultJSON.forEach(elm => {
                // console.log(elm.id, elm.thought, elm.tag);
                loadStar(elm.id, elm.thought, elm.tag);
            });
        } catch (e) {
            
        }

    }

    const getTags = async () => {
        var requestOptions = {
            method : "GET",
            redirect: "follow"
        }

        try{ 
            var tags = await fetch("http://localhost:3000/Tags", requestOptions)
            var tagsJSON = await tags.json()
            setTags(tagsJSON)
        } catch (e) {

        }

    }

    useEffect(()=> {
        getStars();
        getTags();
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
                <MultiSelect value={selectedTags} onChange={(e) => setSelectedTags(e.value)} options={tags} optionLabel="name" display="chip" 
                        placeholder="Select Tags" maxSelectedLabels={3} className="p-multiselect" />
                <button type="button" className="button" onClick={addStar}>Submit</button>
            </div>
        
        </div>
    );
}

export default Stars;
