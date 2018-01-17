import React, { Component } from 'react';
import './css/Features.css';

class FeaturesCol extends Component {
  render(){
    return(
      <div className='featuresCol'>
        <div className='iconColFeatures'>
          <img
            className='iconImgFeatures'
            src={this.props.src}
          />
        </div>
        <div className='textBlockFeatures'>
          <h1>{this.props.headerText}</h1>
          <p>{this.props.footerText}</p>
        </div>
      </div>
    );
  }
}

class Features extends Component {
  render(){
    return(
      <div className='featuresContainer'>
        <h1 className='featuresCaption'>Features of the app</h1>
        <div className='infoBlockFeatures'>
          <FeaturesCol
            src={require('./img/feature-1.png')}
            headerText='No Newsfeed'
            footerText='No unnesary info reaches you, only matches of your property'
          />
          <FeaturesCol
            src={require('./img/feature-2.png')}
            headerText='Broker only'
            footerText='Connect with fellow brokers and seal the deal.'
          />
          <FeaturesCol
            src={require('./img/feature-3.png')}
            headerText='Easy forms'
            footerText='Fill the detailsof your clients property in seconds'
          />
          <FeaturesCol
            src={require('./img/feature-4.png')}
            headerText='Offers'
            footerText='First 100 posts are free'
          />
        </div>
      </div>
    );
  }
}
export default Features;
