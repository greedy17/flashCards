import React from 'react';
import AddCard from '../AddCard/addCard';
import CreateCollection from '../CreateCollection/createCollection';
import Collections from '../Collections/collections';
import './sideBar.css';

const sideBar = (props) => {
  return(
    <div className='row'>
      <div className='collections'>
        <Collections collections={props.collections}/>
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