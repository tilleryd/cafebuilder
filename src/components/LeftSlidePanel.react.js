// LeftSlidePanel.react.js

import Button from '../components/ui/Button.react';
import React from 'react';
import SlidePanel from '../components/ui/SlidePanel.react';

class LeftSlidePanel extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		<div className="leftSlidePanel">
  		  <SlidePanel 
          position="left"
          title="Presets">
          <Button text="Original" />
  		    <Button text="Supersport" />
  		  </SlidePanel>
  		</div>
  	);	
  }

}

module.exports = LeftSlidePanel;
