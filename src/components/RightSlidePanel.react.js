// RightSlidePanel.react.js

import Button from '../components/ui/Button.react';
import ColorPicker from './ColorPicker.react';
import React from 'react';
import SlidePanel from '../components/ui/SlidePanel.react';

class RightSlidePanel extends React.Component {

  constructor(props) {
  	super(props);

    this._onSave = this._onSave.bind(this);
  }

  _onSave() {
    return;
  }

  render() {
  	return (
  		<div className="rightSlidePanel">
  		  <SlidePanel 
  		    position="right"
  		    title="Tools"
          visible={true}>
  		    <ColorPicker />
  		    <Button 
  		      cssClasses="save"
  		      text="Save"
  		      clickHandler={this._onSave} />
  		  </SlidePanel>
  		</div>
  	);	
  }

}

module.exports = RightSlidePanel;
