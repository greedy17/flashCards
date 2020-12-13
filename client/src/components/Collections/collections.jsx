import React from 'react';
import CollectionTile from '../CollectionTile/collectionTile';
import './collections.css';

const collections = (props) => {
  return(
    <div>
      {
        props.collections.map((collection, i) => {
          return(
            <CollectionTile 
            title={props.collections[i].title}
            key={i+1}
             />
          )
        })
      }
    </div>
  )
}

export default collections;