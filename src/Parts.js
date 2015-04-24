import React from 'react';
import Part from 'Part';

class Parts extends React.Component {

  render() {
    return (
      <ul className="parts">
        {this.props.partName}
        {
          this.props.parts.map(part => {
        	  return <Part name={part.name} />;
          })
        }
      </ul>
    );  
	}

}

module.exports = Parts;