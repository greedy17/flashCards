import React from 'react';
import './collection.css';

const collection = (props) => {
  return(
    <div className="collection">
      <h1>{props.collection.title}</h1>
    </div>
  )
}

export default collection;