import React from 'react';
import Card from "../Card/card"

function CardViewer(props){
    return(
        <div>
            <Card collection={props.collection} card={props.cards[0]}/>
        </div>
        
    );
}

export default CardViewer;