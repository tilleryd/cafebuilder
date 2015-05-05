// Header.react.js

import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <h1 className="title">CafeBuilder</h1>
        </header>
      </div>
    );
  }

}

module.exports = Header;
