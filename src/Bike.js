// Bike.js

import React from 'react';
import ActivePart from 'ActivePart';
// import PartsConfig from 'partsConfig';

class Bike extends React.Component {

  render() {
  	let coreConfig = {
  		id: 'core',
  		file: 'core.png',
  		w: '955',
  		h: '452'
  	}

  	return (
  		<div id="bike" className="bike">
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

module.exports = Bike;