import React, {useState} from 'react';

import data from './data';
////// NEED TO ADD STYLING AND REACT ICONS /////
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { FaQuoteRight } from 'react-icons/fa';
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
    <article>
        <div className="review">
                <div className="img-container ">
                    <img src={image} alt={name} className="person-img" />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>

                <h4 className="author">
                    {name}
                </h4>
                <p className="job">
                    {job}
                </p>
                <p className="info">
                    {text}
                </p>
                <div className="btn-container">
                    <button className="prev-btn" onClick={prevBtn}> <AiOutlineLeft/></button>
                    <button className="next-btn" onClick={nextBtn}><AiOutlineRight/></button>
                </div>
                <div><button className="random-btn" onClick={randomBtn}>Surprise me</button></div>
        </div>
    </article>
    
    </>
}

export default Review;