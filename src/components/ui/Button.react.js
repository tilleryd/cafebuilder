// Button.react.js

import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id: props.id
    }

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    e.preventDefault();
  }

  render() {
    return (
    	<button onClick={this._onClick}></button>
    );
  }

}

Button.propTypes = {
  id: React.PropTypes.string
};

Button.defaultProps = {
  id: ''
};

module.exports = Button;
