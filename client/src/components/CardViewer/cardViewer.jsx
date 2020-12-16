import React from 'react';
import Card from "../Card/card";
import './cardViewer.css';
import SideBar from '../SideBar/sideBar';
import CardCounter from '../CardCounter/cardCounter';

const CardViewer = (props) => {
    return(
        <div className='row'>
          <div className='bar'>
              <SideBar 
                //cardWord ={props.cardWord}
                //cardDefinition = {props.cardDefinition}
                //pushCard = {() => props.pushCard()} 
                currentCollection = {props.currentCollection}
                collectionNum={props.collectionNumber} 
                collections={props.collections} 
                prevCollection={() => props.prevCollection()} 
                nextCollection={() => props.nextCollection()}/>
          </div>
          <div className="main">
            <div className='prev'>
                <button className="btn-info btn-lg" onClick={() => props.previousCard()}>Prev</button>
            </div>
            <div className='cardAndcount'>
                <h4>Click the flashcard to reveal definition!</h4>
                <Card cards={props.cards} cardNum={props.cardNum}/>
                <CardCounter cardNum={props.cardNum} cards={props.cards} />
            </div>
            <div className='next'>
                <button className="btn-info btn-lg" onClick={() => props.nextCard()}>Next</button>
            </div>
          </div>
        </div>
    )    
}

export default CardViewer;