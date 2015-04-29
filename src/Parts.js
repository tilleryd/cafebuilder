// Parts.js

import React from 'react';
import Part from 'Part';

class Parts extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      parts: props.parts
    }
  }

  render() {
    return (
      <div id="parts">
        {
          this.state.parts.map(partType => {
            return (
              <div id={partType.id}s>
                <ul className="parts">
                  {
                    partType.parts.map(part => {
                      return <Part partId={partType.id} partName={part.name} />
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
    );
  }

}

Parts.propTypes = {
  parts: React.PropTypes.array
};

Parts.defaultProps = {
  parts: []
};

module.exports = Parts;
