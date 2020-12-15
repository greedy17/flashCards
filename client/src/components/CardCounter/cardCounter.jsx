import React from 'react';
import './cardCounter.css';

const cardCounter = (props) => {
  return(
    <div className="counter">
      <h3>{props.cardNum + 1} / {props.cards.length}</h3>
    </div>
  )
}

export default cardCounter;