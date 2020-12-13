import React from 'react';

const cardCounter = (props) => {
  return(
    <div>
      <h3>{props.cardNum + 1} / {props.cards.length}</h3>
    </div>
  )
}

export default cardCounter;