import React from 'react';
import Part from 'Part';

class Parts extends React.Component {

  render() {
    return (
      <ul className="parts">
        {this.props.partId} 
        {
          this.props.parts.map(part => {
            return <Part partId={this.props.partId} partName={part.name} />;
          })
        }
      </ul>
    );
  }

}

module.exports = Parts;