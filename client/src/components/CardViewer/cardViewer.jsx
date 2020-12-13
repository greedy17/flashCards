import React from 'react';
import Card from "../Card/card";
import './cardViewer.css';
import SideBar from '../SideBar/sideBar';
import CardCounter from '../CardCounter/cardCounter';

const CardViewer = (props) => {
    return(
        <div className='row'>
          <div className='bar'>
              <SideBar collections={props.collections}/>
          </div>
          <div className="main">
            <div className='prev'>
                <button className="btn-warning btn-lg" onClick={() => props.previousCard()}>Prev</button>
            </div>
            <div className='def'>
                <Card card={props.card}/>
                <CardCounter cardNum={props.cardNum} cards={props.cards} />
            </div>
            <div className='next'>
                <button className="btn-warning btn-lg" onClick={() => props.nextCard()}>Next</button>
            </div>
          </div>
        </div>
    )    
}

export default CardViewer;