// SlidePanel.react.js

import React from 'react';

class SlidePanel extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      components: props.components,
      position: props.position,
      title: props.title
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
    let iconClass = '';
    if (this.state.position === 'left') {
      iconClass = this.state.visible ? 'fa-angle-double-left': 'fa-angle-double-right';
    } else {
      iconClass = this.state.visible ? 'fa-angle-double-right': 'fa-angle-double-left';
    }
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
          <i className={this._getIconClass()} />
         </div>
        <div className="panel">
          <div className="header">
            <h2>{this.props.title}</h2>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

SlidePanel.propTypes = {
  components: React.PropTypes.array,
  position: React.PropTypes.string,
  title: React.PropTypes.string,
  visible: React.PropTypes.bool
};

SlidePanel.defaultProps = {
  components: [],
  position: '',
  title: '',
  visible: false
};

module.exports = SlidePanel;
