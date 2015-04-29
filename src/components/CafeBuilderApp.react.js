// CafeBuilderApp.react.js

import React from 'react';

import PartsConfig from '../partsConfig';
import Header from './Header.react';
import Parts from '../Parts';
import Bike from '../Bike';

class CafeBuilderApp extends React.Component {

  render() {
  	let activeColor = '#666666';

  	return (
  		<div>
  		  <Header activeColor={activeColor} />
  		  <Parts parts={PartsConfig} />
  		  <Bike parts={PartsConfig} activeColor={activeColor} />
  		</div>
  	);	
  }

};

module.exports = CafeBuilderApp;
