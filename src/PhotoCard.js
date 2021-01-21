import React from 'react';

const PhotoCard = (props) => {
    console.log("props");
    return (
        <div className="img-holder">
            <h2>{props.title} </h2>
            <img src={props.url} alt="pics" />
            <p>{props.description}</p>
        </div>
    );
};

export default PhotoCard;