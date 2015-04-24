import React from 'react';

class Part extends React.Component {

  onClick(e) {
    e.preventDefault();
  	$(`#${this.props.partId}`).trigger('changeImage', this.props.partName);
  }

  render() {
    return (
      <li className="part">
        <button onClick={this.onClick.bind(this)}>
          {this.props.partName}
        </button>
      </li>
    );
  }

}

module.exports = Part;