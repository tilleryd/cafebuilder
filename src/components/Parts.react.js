// Parts.react.js

import Part from './Part.react';
import React from 'react';

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
            if (key === 'core') { return }
            return (
              <div>
                {key}
                <ul className="parts">
                  {
                    Object.keys(this.state.parts[key].parts).map(partKey => {
                      return <Part id={key} name={partKey} />
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
