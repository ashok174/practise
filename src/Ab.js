import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Nav from './Nav.js';
import image1 from './images/i4.jpg';
import image2 from './images/i2.jpg';
import image3 from './images/i3.jpg';

const slideImages = [
  './images/i4.jpg',
  './images/i3.jpg',
  './images/i4.jpg'
];

const Ab = () => {
    return (
        <>
        <Nav/>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide One</span>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide Two</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide Three</span>
            </div>
          </div>
        </Slide>
      </div>
      </>
    )
}
export default Ab