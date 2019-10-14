import React from 'react';

const PhotoCard = props => {
    return (
    <div className='photo-card'>
    <img src={props.url} />
    <h3>Author: {props.author}</h3>
    </div>
    )
}

export default PhotoCard;