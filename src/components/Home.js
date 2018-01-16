import React, { Component } from 'react';

import './css/Home.css';

import HowItWorks from './HowItWorks';
import Features from './Features';
import Download from './Download';
import ContactUs from './ContactUs';

class Home extends Component {
  render(){
    return(
      <div className='wrapper'>
        <div className='homeContainer'>
          <div className='header'>
            <ul className='navHeader'>
              <li><a href='#howitworks'>how it works</a></li>
              <li><a href='#features'>features</a></li>
              <li><a href='#download'>download</a></li>
              <li><a href='#contactus'>contact us</a></li>
            </ul>
          </div>
          <div className='logoBlock'>
            <div className='logoCol'>
              <img
                className='imgLogo'
                src={require('./img/mml-white-logo.png')}
              />
            </div>
          </div>
          <div className='infoBlock'>
            <div className='textBlock'>
              <div className='textBlockLogo'>
                <img
                  className='textBlockLogoIcon'
                  src={require('./img/logo-big.png')}
                />
              </div>
              <h2>Let your client get the perfect match</h2>
              <p>a one liner text <br /> it may extend to 2 lines <br /> or even 3 if needed</p>
            </div>
          </div>
        </div>
        <HowItWorks id='howitworks' />
        <Features id='features'/>
        <Download id='download' />
        <ContactUs id='contactus' />
      </div>
    );
  }
}

export default Home;
