// CafeBuilderApp.react.js

import Bike from './Bike.react';
import Header from './Header.react';
import Parts from './Parts.react';
import React from 'react';

class CafeBuilderApp extends React.Component {

  render() {
  	return (
  		<div>
  		  <Header />
  		  <Parts />
  		  <Bike />
  		</div>
  	);	
  }

}

module.exports = CafeBuilderApp;
