// ColorPicker.react.js

let $ = require('jquery');
require('spectrum')($);

import PartActions from '../actions/PartActions';
import React from 'react';

let activeColor = '#666666';

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeColor: activeColor
    }

    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  }

  componentDidMount() {
    $('#'+this.id).spectrum({
      color: this.state.activeColor,
      flat: true,
      preferredFormat: 'rgb',
      showButtons: false,
      move: function(color) {
        PartActions.changeColor(color);
      }
    });
  }

  render() {
    return (
	    <div className="colorpicker">
	      <input type="text" id={this.id} />
	    </div>
    );
  }

}

ColorPicker.propTypes = {
  activeColor: React.PropTypes.string
};

ColorPicker.defaultProps = {
  activeColor: ''
};

module.exports = ColorPicker;
