import React from 'react';
import AddCard from '../AddCard/addCard';
import CreateCollection from '../CreateCollection/createCollection';
import Collections from '../Collections/collections';
import './sideBar.css';

const sideBar = (props) => {
  return(
    <div className='row'>
      <div className='categories'>
        <h1 className="title" >Categories</h1>
      </div>
      <div className='collections'>
        <Collections collections={props.collections} collectionNum={props.collectionNum}/>
      </div>
      <div className='add-card'>
        <AddCard 
          handleSubmit={() => props.handleSubmit()}
          collections={props.collections}
          />
      </div>
      <div>
        <CreateCollection/>
      </div>
    </div>
  );
}

export default sideBar;