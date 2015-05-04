// PartsToggle.react.js

import PartActions from '../actions/PartActions';
import React from 'react';

class PartsToggle extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      visible: props.visible
    }

    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  componentDidMount() {
    if (this.props.hoverable) {
      $(`#${this.props.parentId}`)
        .on('mouseenter', (e) => {
          this._showToggle();
        })
        .on('mouseleave', (e) => {
          this._hideToggle();
        });
    }
  }

  componentWillUnmount() {
    $(React.findDOMNode(this).parentElement)
      .off('mouseenter', this._showToggle)
      .off('mouseleave', this._hideToggle);
  }

  _onMouseOver() {
    PartActions.showParts(this.props.parentId);
  }

  _onMouseLeave() {
    PartActions.hideParts(this.props.parentId);
  }

  _showToggle() {
    this.setState({visible: true});
  }

  _hideToggle() {
    this.setState({visible: false});
  }

  render() {
    let cssClasses = 'toggle';

    if (this.state.visible) {
      cssClasses += ' visible';
    }

    return (
      <div
        className={cssClasses}
        onMouseOver={this._onMouseOver}
        onMouseLeave={this._onMouseLeave}>
        <div>+</div>
      </div>
    );
  }

}

PartsToggle.propTypes = {
  hoverable: React.PropTypes.bool,
  parentId: React.PropTypes.string,
  visible: React.PropTypes.bool
};

PartsToggle.defaultProps = {
  hoverable: false,
  parentId: '',
  visible: false,
};

module.exports = PartsToggle;
