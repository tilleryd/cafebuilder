// SlidePanel.react.js

import React from 'react';

class SlidePanel extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      components: props.components,
      position: props.position
    }

    this._onBtnClick = this._onBtnClick.bind(this);
  }

  _getCSSClasses() {
    let cssClasses = ['slidePanel', this.state.position] 

    if (this.state.visible) {
      cssClasses.push('visible');
    }

    return cssClasses.join(' ');
  }

  _getIconClass() {
  	let baseClass = 'fa fa-lg ';
  	let iconClass = this.state.visible ? 'fa-angle-double-right' : 'fa-angle-double-left';
  	return baseClass + iconClass;
  }

  _onBtnClick() {
  	this.setState({visible: !this.state.visible});
  }

  render() {
    return (
      <div className={this._getCSSClasses()}>
        <div 
          className="btn"
          onClick={this._onBtnClick}>
          <i className={this._getIconClass()}></i>
         </div>
        <div className="panel">
          {
            this.state.components.map(component => {
              return React.createElement(component);
            })
          }
        </div>
      </div>
    );
  }

}

SlidePanel.propTypes = {
  components: React.PropTypes.array,
  position: React.PropTypes.string,
  visible: React.PropTypes.bool
};

SlidePanel.defaultProps = {
  components: [],
  position: '',
  visible: false
};

module.exports = SlidePanel;
