// Bike.react.js

import BikeStore from '../stores/BikeStore';
import partsConfig from 'partsConfig';
import PartOnBike from './PartOnBike.react';
import React from 'react';

function getBikeState() {
  return BikeStore.getAllParts();
}

class Bike extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      parts: getBikeState()
    }
  }

  render() {
  	return (
  		<div className="bike">
  		  {
  		  	Object.keys(this.state.parts).map(key => {
            let part = this.state.parts[key];
		  		  return <PartOnBike
                      config={partsConfig[key].parts[part.name]}
                      id={key}
                      imageFile={partsConfig[key].file}
                      part={part} />
          })
  		  }
  		</div>
    );
  }

}

Bike.propTypes = {
	parts: React.PropTypes.object
};

Bike.defaultProps = {
	parts: {}
};

module.exports = Bike;
