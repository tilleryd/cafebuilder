// Bike.react.js

import partsConfig from 'partsConfig';
import PartOnBike from './PartOnBike.react';
import React from 'react';

class Bike extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      parts: props.parts
    }
  }

  render() {
  	return (
  		<div className="bike">
  		  {
  		  	Object.keys(this.props.parts).map(key => {
            let part = this.props.parts[key];
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
