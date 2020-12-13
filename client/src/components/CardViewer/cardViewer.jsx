import React from 'react';
import Card from "../Card/card"
import './cardViewer.css'

const CardViewer = (props) => {
    return(
        <div className='row'>
          <div className='prev'>
              <button className="btn-warning" onClick={() => props.previousCard()}>Prev</button>
          </div>
          <div className='def'>
             <Card card={props.card}/>
          </div>
          <div className='next'>
             <button className="btn-warning" onClick={() => props.nextCard()}>Next</button>
          </div>
        </div>
    )    
}

export default CardViewer;