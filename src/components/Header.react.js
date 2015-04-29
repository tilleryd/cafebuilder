// Header.react.js

global.$ = global.jQuery = require('jquery');
require('spectrum')($);

import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      activeColor: props.activeColor
    }
  }

  componentDidMount() {
    $('#spectrum-colorpicker-flat').spectrum({
      color: this.state.activeColor,
      flat: true,
      preferredFormat: 'rgb',
      showButtons: false,
      move: function(color) {
        $('canvas').trigger('changeColor', color.toHexString());
      }
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="title">CafeBuilder</h1>
        </header>
        <div className="tools">
          <div className="colorpicker">
            <input type="text" id="spectrum-colorpicker-flat" />
          </div>
        </div>
      </div>
    );
  }

}

Header.propTypes = {
  activeColor: React.PropTypes.string
};

Header.defaultProps = {
  activeColor: ''
};

module.exports = Header;
