// RightSlidePanel.react.js

import ColorPicker from './ColorPicker.react';
import React from 'react';
import SlidePanel from '../components/ui/SlidePanel.react';

class RightSlidePanel extends React.Component {

  render() {
  	return (
  		<div>
  		  <SlidePanel
  		    components={[ColorPicker]}
  		    position="right" />
  		</div>
  	);	
  }

}

module.exports = RightSlidePanel;