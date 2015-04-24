import React from 'react';

class Part extends React.Component {

  render() {
    return (
      <li className="part">
        {this.props.name}
      </li>
    );  
	}

}

module.exports = Part;