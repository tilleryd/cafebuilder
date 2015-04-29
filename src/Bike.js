// Bike.js

import React from 'react';
import ActivePart from 'ActivePart';

class Bike extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      parts: props.parts,
      activeColor: props.activeColor
    }
  }

  render() {
  	let coreConfig = {
  		id: 'core',
  		file: 'core.png',
  		w: '955',
  		h: '452'
  	}

  	return (
  		<div className="bike">
  		  <ActivePart config={coreConfig} activeColor={''} />
  		  {
  		  	this.props.parts.map(part => {
  		  		return <ActivePart config={part} activeColor={this.props.activeColor} draggable={true} />
  		  	})
  		  }
  		</div>
    );
  }

}

Bike.propTypes = {
	parts: React.PropTypes.array,
	activeColor: React.PropTypes.string
};

Bike.defaultProps = {
	parts: [],
	activeColor: ''
};

module.exports = Bike;
