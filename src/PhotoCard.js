import React, { useState } from "react";

const PhotoCard = (props) => {
    //useState returns an array
    // the first item is the current value
    // the second item is a function that can update value
    const [count, setCount] = useState(0);
    const [dislikes, setDislikes] = useState(0)
    
    // const state = useState(0)
    // const count = state[0]
    // const setCount= state[1];


    // the inital 0 is ignored after hte first time
    // that the PhotoCard function is called. 
     
    console.log("props");
    return (
        <div className="img-holder">
            <button onClick={

                (e => {
                    setCount(count + 1 )
                })

            }>like</button>

            <button onClick={
                (e => {
                    // setCount(count -1) if you want to only have 1 number
                setDislikes(dislikes - 1 )
               }) 
            }> dislike</button>
            <p>likes: {count} dislikes: { dislikes }</p>
            <h2>{props.title} </h2>
            <img src={props.url} alt="pics" />
            {props.title && <p>{props.description}</p>}
            {/* <p>{props.description}</p>  If you have a good alternative use a tenary*/}
        </div>
    );
};

export default PhotoCard;
