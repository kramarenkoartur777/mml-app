import React, { Component } from 'react';
import './css/HowItWorks.css';

class HowItWorks extends Component {
  render(){
    return(
      <div className='howitworksContainer'>
        <div className='howitworksLogoBlock'>
          <img
            className='howitworksLogoIcon'
            src={require('./img/mml-blue-logo.png')}
          />
        </div>
        <div className='howitworksInfoBlock'>
          <p id='p1' className='howitworksInfoText'>need office space</p>
          <p id='p2' className='howitworksInfoText'>need to sell a flat</p>
          <p id='p3' className='howitworksInfoText'>looking for pg</p>
          <p id='p4' className='howitworksInfoText'>need a place in kolkata</p>
          <p id='p5' className='howitworksInfoText'>have a office space for rent</p>
          <p id='p6' className='howitworksInfoText'>looking for a room mate</p>

          <p id='p7' className='howitworksInfoText'>found my room mate!</p>
          <p id='p8' className='howitworksInfoText'>got my flat</p>
          <p id='p9' className='howitworksInfoText'>found the perfect office</p>

          <img
            className='howitworksInfoImg'
            src={require('./img/Network-graphics5.jpg')}
          />
        </div>
      </div>
    );
  }
}

export default HowItWorks;
