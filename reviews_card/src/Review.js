import React, {useState} from 'react';

import data from './data';

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
            index += 1;
            return checkIndex(index)
        })
    }

    const prevBtn = () => {
        setIndex(() => {
            index -= 1;
            return checkIndex(index)
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
                <button className="prev-btn" onClick={nextBtn}>prev</button>
                <button className="next-btn">next</button>
                <div><button className="random-btn">Surprise me</button></div>
        </div>
    </div>
    
    </>
}

export default Review;