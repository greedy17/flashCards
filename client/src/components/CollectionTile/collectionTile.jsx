import React from 'react';
import './collectionTile.css';

const collectionTile = ({title}) => {
  return(
    <div className='tile'>
      <h1>{title}</h1>
    </div>
  )
}

export default collectionTile;