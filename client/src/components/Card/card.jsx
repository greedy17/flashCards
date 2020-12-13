import React from 'react';
import './card.css';

const Card = (props) => {
    return(
    <div className="card">
        <h1 className="">{props.card.word}</h1>
        <h3 className="">{props.card.definition}</h3>   
    </div>
 );
}

export default Card;