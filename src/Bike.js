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
  	return (
  		<div className="bike">
  		  <ActivePart id={'core'} activeColor={''} />
  		  {
  		  	Object.keys(this.props.parts).map(key => {
		  		  return <ActivePart
                      id={key}
                      partType={this.props.parts[key].partType}
                      activeColor={this.props.activeColor}
                      draggable={true} />
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
