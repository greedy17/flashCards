import React from 'react';
import Card from "../Card/card"

function CardViewer(props){
    return(
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={() => props.previousCard()}>Previous Card</button>
            </div>
            <div className="col-md-4">
            <Card collection={props.collection} card={props.currentCard} 
            />
            </div>
            
            <div className="col-md-4">
                <button onClick={() => props.nextCard()}>Next Card</button>
            </div>
        </div>
        
    );
}

export default CardViewer;