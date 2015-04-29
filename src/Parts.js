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
          Object.keys(this.state.parts).map(key => {
            if(!this.state.parts[key]['parts']) { return; }
            return (
              <div id={this.state.parts[key]}s>
                <ul className="parts">
                  {
                    Object.keys(this.state.parts[key].parts).map(partKey => {
                      return <Part partId={key} partName={partKey} />
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
