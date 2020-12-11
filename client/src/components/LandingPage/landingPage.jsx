import React from 'react';
import './LandingPage.css'

const landingPage = () => {
  return(
  <div id="hero" className="jumbotron">
    <div className="container">
      <h1 className="hero-title load-hidden">
      Study Software developement the old fashioned way.
      </h1>
      <p className="hero-cta load-hidden">
        <a className="cta-btn" href="#app">Start learning now!</a>
      </p>
    </div>
  </div>
  )
}

export default landingPage;