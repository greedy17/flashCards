import React from 'react';
import Card from "../Card/card"

function CardViewer(props){
    return(
        <Card card={props.card} />
    );
}

export default CardViewer;