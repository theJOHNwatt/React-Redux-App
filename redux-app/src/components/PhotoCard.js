import React from 'react';

const PhotoCard = props => {
    return (
    <div className='photo-card'>
    <h2>Category: {props.category.title}</h2>
    <h1>{props.question}.</h1>
    <h3>What is {props.answer}?</h3>

    </div>
    )
}

export default PhotoCard;