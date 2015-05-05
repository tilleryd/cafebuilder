// Button.react.js

import React from 'react';

class Button extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      clickHandler: props.clickHandler,
      cssClasses: props.cssClasses,
      id: props.id,
      text: props.text
    }

    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    e.preventDefault();
    this.props.clickHandler();
  }

  render() {
    return (
    	<button className={this.state.cssClasses} onClick={this._onClick}>
        {this.state.text}
      </button>
    );
  }

}

Button.propTypes = {
  clickHandler: React.PropTypes.func,
  cssClasses: React.PropTypes.string,
  id: React.PropTypes.string,
  text: React.PropTypes.string
};

Button.defaultProps = {
  clickHandler: null,
  cssClasses: '',
  id: '',
  text: ''
};

module.exports = Button;
