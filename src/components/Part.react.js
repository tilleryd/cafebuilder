// Part.react.js

import PartActions from '../actions/PartActions';
import React from 'react';

class Part extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id: props.id,
      name: props.name
    }
  }

  _onClick(e) {
    e.preventDefault();
    PartActions.changePart(this.state.id, this.state.name);
  }

  render() {
    return (
      <li className="part">
        <button onClick={this._onClick.bind(this)}>
          {this.state.name}
        </button>
      </li>
    );
  }

}

Part.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string
};

Part.defaultProps = {
  id: '',
  name: ''
};

module.exports = Part;
