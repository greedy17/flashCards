import React from 'react';
import './LandingPage.css'

const landingPage = () => {
  return(
  <div id="hero" className="jumbotron">
    <div className="container">
      <h1 className="hero-title">Study software development the old fashioned way.</h1>
        <div className="bottom">
          <a href="#app"><i className="arrow down"></i></a>
        </div>
    </div>
  </div>
  )
}

export default landingPage;