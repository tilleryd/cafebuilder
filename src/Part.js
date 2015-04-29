// Part.js

import React from 'react';
import PartActions from 'actions/PartActions';

class Part extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      partId: props.partId,
      partName: props.partName
    }
  }

  _onClick(e) {
    e.preventDefault();
    PartActions.changePart(this.state.partName);
    // $(`#${this.state.partId}`).trigger('changeImage', this.state.partName);
  }

  render() {
    return (
      <li className="part">
        <button onClick={this._onClick.bind(this)}>
          {this.state.partName}
        </button>
      </li>
    );
  }

}

Part.propTypes = {
  partId: React.PropTypes.string,
  partName: React.PropTypes.string
};

Part.defaultProps = {
  partId: '',
  partName: ''
};

module.exports = Part;
