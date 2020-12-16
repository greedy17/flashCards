import React from 'react';
import AddCard from '../AddCard/addCard';
import CreateCollection from '../CreateCollection/createCollection';
import CollectionTile from '../CollectionTile/collectionTile';
import './sideBar.css';

const sideBar = (props) => {
  return(
    <div className='row'>
        <div className='categories'>
          <h1 className="title">Collections</h1>
        </div>
      <div className='collections'>
        <div className="bottom">
          <i onClick={() => props.prevCollection()} className="up arrow"></i>
        </div>
        <CollectionTile collectionNum={props.collectionNum} collections={props.collections}/>
        <div className="bottom">
          <i onClick={() => props.nextCollection()} className="down arrow"></i>
        </div>
      </div>
      <div className='add-card'>
        <AddCard/>
      </div>
      <div>
        <CreateCollection/>
      </div>
    </div>
  )
}

export default sideBar;