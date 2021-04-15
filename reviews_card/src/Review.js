import React, {useState} from 'react';

import data from './data';
////// NEED TO ADD STYLING AND REACT ICONS /////

const Review = ()=> {

    const [index, setIndex] = useState(0);
    const {id, name, job, image, text} = data[index];

    const checkIndex = (index)=> {
        if (index > data.length-1){
            return 0;
        }
        if (index < 0) {
            return data.length -1;
        }

        return index
    }

    const nextBtn = ()=> {
        setIndex(()=>{
            let newIndex = index + 1;
            return checkIndex(newIndex)
        })
    }

    const prevBtn = () => {
        setIndex(() => {
            let newIndex = index - 1;
            return checkIndex(newIndex)
        })
    }

    const randomBtn = ()=> {
        setIndex(()=>{
            let newIndex = Math.floor(Math.random() * data.length);
            if (newIndex === index){
                newIndex += 1;
            }
            return newIndex;
        })
    }

    return <>
    <div className="container">
        <div className="review">
                <div className="img-container ">
                    <img src={image} alt={name} className="person-img" />
                </div>

                <div className="author">
                    <h4>{name}</h4>
                </div>
                <div className="job">
                    {job}
                </div>
                <div className="info">
                    {text}
                </div>
                <button className="prev-btn" onClick={prevBtn}>prev</button>
                <button className="next-btn" onClick={nextBtn}>next</button>
                <div><button className="random-btn" onClick={randomBtn}>Surprise me</button></div>
        </div>
    </div>
    
    </>
}

export default Review;