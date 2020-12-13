import React from 'react';
import CollectionScroll from '../CollectionScroll/collectionScroll';
import AddCard from '../AddCard/addCard';
import CreateCollection from '../CreateCollection/createCollection';
import Collection from '../Collection/collection';
import './sideBar.css';

const sideBar = (props) => {
  return(
    <div className='row'>
     <div className=''>
      <AddCard/>
    </div>
    <div className=''>
      <CollectionScroll>
        <Collection collection={props.collection}/>
      </CollectionScroll>
    </div>
    <div className=''>
      <CreateCollection/>
    </div>
  </div>
  )
}

export default sideBar;