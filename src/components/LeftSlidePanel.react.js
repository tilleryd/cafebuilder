// LeftSlidePanel.react.js

import Button from '../components/ui/Button.react';
import PartActions from '../actions/PartActions';
import React from 'react';
import SlidePanel from '../components/ui/SlidePanel.react';

class LeftSlidePanel extends React.Component {

  constructor(props) {
  	super(props);

    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick(e) {
    PartActions.changePreset(e.target.textContent.toLowerCase())
  }

  render() {
  	return (
  		<div className="leftSlidePanel">
  		  <SlidePanel 
          position="left"
          title="Presets"
          visible={true}>
          <Button 
            clickHandler={this._onButtonClick}
            text="Original" />
  		    <Button
            clickHandler={this._onButtonClick}
            text="Supersport" />
  		  </SlidePanel>
  		</div>
  	);	
  }

}

module.exports = LeftSlidePanel;
