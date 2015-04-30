// CafeBuilderApp.react.js

import React from 'react';

import partsConfig from '../partsConfig';
import bikeConfig from '../bikeConfig';
import Header from './Header.react';
import Parts from './Parts.react';
import Bike from './Bike.react';

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