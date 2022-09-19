import React from 'react';



const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-container'>
            <h4>{props.photo.date}</h4>
            <h2>{props.photo.title}</h2>
            <img src={props.photo.hdurl} />
            <p className='descrip'>{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto