import React from 'react';
import './collectionTile.css';

const collectionTile = ({title}) => {
  return(
    <div>
      <h1 className='tile'>{title}</h1>
    </div>
  )
}

export default collectionTile;