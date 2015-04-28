// Parts.js

import React from 'react';
import Part from 'Part';

class Parts extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      partId: props.partId,
      parts: props.parts
    }
  }

  render() {
    return (
      <ul className="parts">
        {this.state.partId}s
        {
          this.state.parts.map(part => {
            return <Part partId={this.state.partId} partName={part.name} />
          })
        }
      </ul>
    );
  }

}

Parts.propTypes = {
  partId: React.PropTypes.string,
  parts: React.PropTypes.array
};

Parts.defaultProps = {
  partId: '',
  parts: []
};

module.exports = Parts;
