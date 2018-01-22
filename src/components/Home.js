import React, { Component } from 'react';
import { Link, Element , animateScroll as scroll } from 'react-scroll';

import './css/Home.css';

import HowItWorks from './HowItWorks';
import Features from './Features';
import Download from './Download';
import ContactUs from './ContactUs';

class Home extends Component {
  constructor (props){
      super(props);
      this.state = {
        menu: false
      };
      this.scrollToTop = this.scrollToTop.bind(this);
      this._hamburger = this._hamburger.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  _hamburger(){
    if(this.state.menu){
      return(
        <div className='homeContainerHamburger'>
          <div className='asd'>
            <div className='hamburgerCloseBlock'>
              <a onClick={() => this.setState({menu: false})}><img
                className='hamburgerCloseIcon'
                src={require('./img/closeIcon.png')}
              /></a>
            </div>
            <div className='hamburgerLogoBlock'>
              <img
                className='hamburgerLogoIcon'
                src={require('./img/logo-big.png')}
              />
            </div>
            <div className='hamburgerNav'>
              <ul className='hamburgerNavUl'>
                <li><Link onClick={() => this.setState({menu: false})} to="howitworks" spy={false} smooth={true} duration={1000} >how it works</Link></li>
                <li><Link onClick={() => this.setState({menu: false})} to="features" spy={false} smooth={true} duration={1250} >features</Link></li>
                <li><Link onClick={() => this.setState({menu: false})} to="download" spy={false} smooth={true} duration={1500} >download</Link></li>
                <li><Link onClick={() => this.setState({menu: false})} to="contactus" spy={false} smooth={true} duration={1750} >contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
  render(){
    return(
      <div className='wrapper'>

        {this._hamburger()}

        <div className='homeContainer'>
          <div className='header'>
            <ul className='navHeader'>
              <li><Link to="howitworks" spy={false} smooth={true} duration={1000} >how it works</Link></li>
              <li><Link to="features" spy={false} smooth={true} duration={1250} >features</Link></li>
              <li><Link to="download" spy={false} smooth={true} duration={1500} >download</Link></li>
              <li><Link to="contactus" spy={false} smooth={true} duration={1750} >contact us</Link></li>
            </ul>
          </div>
          <div className='logoBlock'>
            <div className='logoCol'>
            {!this.state.menu ?
              <a className='linkLogoHamburger' onClick={() => this.setState({menu: true})}>
                <img
                  className='imgLogoHamburger'
                  src={require('./img/mml-white-logo.png')}
                />
              </a> : null }
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
              <h2>Connecting Agents. Closing Deals.</h2>
              <p>a one liner text <br /> it may extend to 2 lines <br /> or even 3 if needed</p>
            </div>
          </div>
        </div>

        <Element name="howitworks" >
          <HowItWorks />
        </Element>

        <Element name="features" >
          <Features />
        </Element>

        <Element name="download" >
          <Download />
        </Element>

        <Element name="contactus" >
          <ContactUs />
        </Element>

      </div>
    );
  }
}

export default Home;
