import React, { Component } from 'react';
import './css/Download.css';

class Download extends Component {
  render(){
    return(
      <div className='downloadContainer'>
        <div className='downloadBlock'>
          <div className='navApp'>
            <div className='navAppCol1'>
              <h1>Download the app</h1>
              <div className='navPlayMarketBlock'>
                <a href='#'><img
                  className='logoPlayMarket'
                  src={require('./img/google-play1.png')}
                /></a>
              </div>
              <div className='navAppStoreBlock'>
                <a href='#'><img
                  className='logoAppStore'
                  src={require('./img/app-store1.png')}
                /></a>
              </div>
            </div>
            <div className='navAppCol2'>
              <img
                className='downloadImgScreens'
                src={require('./img/screens.png')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
