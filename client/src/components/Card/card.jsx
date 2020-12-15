import React from 'react';

function Card(props){
    return(
        <div className="card">
            {console.log(props.card)}
            <div className="card--word">{props.card.word}</div>
            <div className="card--word">{props.card.definition}</div>
            
        </div>
        
    );
}

export default Card;