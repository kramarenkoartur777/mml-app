import React, { Component } from 'react';
import './css/ContactUs.css';

class ContactUs extends Component {
  render(){
    return(
      <div id={this.props.id} className='contactUsContainer'>
        <div className='contactusHeader'>
          <div className='contactusHeaderLeft'>
            <h1>Bro App Technologies</h1>
            <div className='contactusHeaderMapBlock'>
              <img
                className='contactusHeaderMapIcon'
                src={require('./img/contact-icons_3.png')}
              />
              <p>234, Chawbaga Road,<br /> Bangalore 600076</p>
            </div>
            <div className='contactusHeaderEmailBlock'>
              <img
                className='contactusHeaderEmailIcon'
                src={require('./img/contact-icons_1.png')}
              />
              <p>e_mail.google.com</p>
            </div>
          </div>
        </div>
        <div className='contactusFooter'>
          <h6>All rights Reserved</h6>
        </div>
      </div>
    );
  }
}

export default ContactUs;
