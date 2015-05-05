// CafeBuilderApp.react.js

import Bike from './Bike.react';
import Button from '../components/ui/Button.react';
import Header from './Header.react';
import React from 'react';
import RightSlidePanel from '../components/RightSlidePanel.react';

class CafeBuilderApp extends React.Component {

  render() {
  	return (
  		<div>
  		  <Header />
  		  <Bike />
  		  <RightSlidePanel />
  		</div>
  	);	
  }

}

module.exports = CafeBuilderApp;
