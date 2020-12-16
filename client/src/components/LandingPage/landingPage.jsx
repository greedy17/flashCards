import React from 'react';
import './landingPage.css'

const landingPage = (props) => {
  return(
  <div id="hero" className="jumbotron">
    <div className="container">
      <h1 className="hero-title">Study the old fashioned way!</h1>
        <div className="bottom">
          <a href="#"><i onClick={() => props.scroll()} className="arrow down"></i></a>
        </div>
    </div>
  </div>
  )
}

export default landingPage;