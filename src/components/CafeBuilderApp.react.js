// CafeBuilderApp.react.js

import Bike from './Bike.react';
import ColorPicker from './ColorPicker.react';
import Header from './Header.react';
import React from 'react';
import SlidePanel from './SlidePanel.react';

class CafeBuilderApp extends React.Component {

  render() {
  	return (
  		<div>
  		  <Header />
  		  <Bike />
  		  <SlidePanel
  		    components={[ColorPicker]}
  		    position="right" />
  		</div>
  	);	
  }

}

module.exports = CafeBuilderApp;
