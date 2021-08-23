import React from 'react'
import Nav from './Nav.js';
import './home.css';

function Home() {
    return (
        <>
        <Nav/>
        <div class="wrap">
  <div id="arrow-left" class="arrow"></div>
  <div id="slider">
    <div class="slide slide1">
      <div class="slide-content">
        <span>Image One</span>
      </div>
    </div>
    <div class="slide slide2">
      <div class="slide-content">
        <span>Image Two</span>
      </div>
    </div>
    <div class="slide slide3">
      <div class="slide-content">
        <span>Image Three</span>
      </div>
    </div>
  </div>
  <div id="arrow-right" class="arrow"></div>
</div>
     </>
    );
  }
  

export default Home;
