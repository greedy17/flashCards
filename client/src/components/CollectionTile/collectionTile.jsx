import React from 'react';
import './collectionTile.css';

const collectionTile = (props) => {
  return(
    <div>
      <h1 className='tile'>{props.collections[props.collectionNum].title}</h1>
    </div>
  )
}

export default collectionTile;