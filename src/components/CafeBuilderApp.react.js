// CafeBuilderApp.react.js

import bikeConfig from '../bikeConfig';
import Bike from './Bike.react';
import Header from './Header.react';
import partsConfig from '../partsConfig';
import Parts from './Parts.react';
import React from 'react';

class CafeBuilderApp extends React.Component {

  render() {
  	let activeColor = '#666666';

  	return (
  		<div>
  		  <Header activeColor={activeColor} />
  		  <Parts parts={partsConfig} />
  		  <Bike parts={bikeConfig} />
  		</div>
  	);	
  }

};

module.exports = CafeBuilderApp;
