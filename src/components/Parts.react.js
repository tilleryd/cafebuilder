// Parts.react.js

import Part from './Part.react';
import PartConstants from '../constants/PartConstants';
import PartsEmitter from '../emitters/PartsEmitter';
import React from 'react';

class Parts extends React.Component {

  constructor(props) {
    super(props);
    
    this.baseCSSClass = 'parts-wrapper';

    this.state = {
      cssClasses: this.baseCSSClass,
      id: props.id,
      hoverable: props.hoverable,
      parts: props.parts
    }

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseOverToggle = this._onMouseOverToggle.bind(this);
  }

  componentDidMount() {
    if (this.props.hoverable) {
      $(`#${this.props.id}`)
        .on('mouseenter', (e) => {
          this._onMouseEnter();
        })
        .on('mouseleave', (e) => {
          this._onMouseLeave();
        });
    }
  }

  componentWillUnmount() {
    $(`#${this.props.id}`)
      .off('mouseenter', this._onMouseEnter)
      .off('mouseleave', this._onMouseLeave);
  }

  _onMouseEnter() {
    this.setState({cssClasses: this.baseCSSClass + ' toggle'});
  }

  _onMouseLeave() {
    this.setState({cssClasses: this.baseCSSClass});
  }

  _onMouseOverToggle() {
    this.setState({cssClasses: this.baseCSSClass + ' toggle visible'});
  }

  render() {
    return (
      <div 
        className={this.state.cssClasses}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        <ul className="parts">
          {
            Object.keys(this.state.parts).map(partKey => {
              return <Part 
                       id={this.props.id}
                       name={partKey} />
            })
          }
        </ul>
        <div 
          className="toggle"
          onMouseOver={this._onMouseOverToggle}>
          <i className="fa fa-wrench"/>
        </div>
      </div>
    );
  }

}

Parts.propTypes = {
  cssClasses: React.PropTypes.string,
  id: React.PropTypes.string,
  hoverable: React.PropTypes.bool,
  parts: React.PropTypes.object
};

Parts.defaultProps = {
  cssClasses: '',
  id: '',
  hoverable: false,
  parts: {}
};

module.exports = Parts;
