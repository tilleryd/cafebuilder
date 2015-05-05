// PartOnBike.react.js

import BikeStore from '../stores/BikeStore';
import jqueryUI from 'jquery-ui';
import partsConfig from '../partsConfig';
import PartConstants from '../constants/PartConstants';
import Parts from './Parts.react';
import React from 'react';

function getPartState(id) {
  return {
    part: BikeStore.getPart(id)
  };
}

class PartOnBike extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      part: props.part
    }
    
    this.canvas = null;
    this.canvasContext = null;
    this.image = null;
    this.imageData = null;

    this._onChangePart = this._onChangePart.bind(this);
    this._onChangeColor = this._onChangeColor.bind(this);
  }

  componentDidMount() {
    let domNode = React.findDOMNode(this);
    this.canvas = domNode.getElementsByTagName('canvas')[0];
    this.canvasContext = this.canvas.getContext('2d');
    this._loadImage();
    if (this.props.config.draggable) {
      // jqueryUI drag
      $(domNode).draggable({opacity: 0.8});
    }

    BikeStore
      .addChangeListener(PartConstants.PART_CHANGE, this._onChangePart)
      .addChangeListener(PartConstants.COLOR_CHANGE, this._onChangeColor);
  }

  componentWillUnmount() {
    BikeStore
      .removeChangeListener(PartConstants.PART_CHANGE, this._onChangePart)
      .removeChangeListener(PartConstants.COLOR_CHANGE, this._onChangeColor);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) { return; } 

    // draw the part image
    this.props.config = partsConfig[this.props.id].parts[this.state.part.name];
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = this.props.config.w;
    this.canvas.height = this.props.config.h;
    this.canvasContext.drawImage(this.image, this.props.config.x, this.props.config.y);
    this._setImageData();

    // add paint color
    if(this.props.config['paintable']) {
      // first reset to original image
      this.canvasContext.putImageData(this.imageData, 0, 0);

      // then colorize
      this.canvasContext.globalCompositeOperation = 'source-atop';
      this.canvasContext.globalAlpha = 0.8;
      this.canvasContext.fillStyle = this.state.part.color;
      this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
  }

  _loadImage() {
    this.image = new Image();
    this.image.src = `/images/${this.props.imageFile}`;
    this.image.onload = () => {
      this.canvasContext.drawImage(this.image, 0, 0);
      this._setImageData();
    }
  }

  _setImageData() {
    this.imageData = this.canvasContext.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  _getCSSClasses() {
    let classes = ['partOnBike-wrapper', this.state.part.name];
    if (this.props.config.draggable) {
      classes.push('draggable');
    }
    return classes.join(' ');
  }

  _onChangePart(id) {
    if (id !== this.props.id) { return }
    this.setState(getPartState(id));
  }

  _onChangeColor() {
    this.setState(getPartState(this.props.id));
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this._getCSSClasses()}>
        <div className="partOnBike">
          <Parts
            id={this.props.id}
            parts={partsConfig[this.props.id].parts}
            hoverable={this.props.config.hoverable} />
          <canvas
            height={this.props.config.h}
            width={this.props.config.w}>
          </canvas>
        </div>
      </div>
    );
  }

}

PartOnBike.propTypes = {
  config: React.PropTypes.object,
  id: React.PropTypes.string,
  imageFile: React.PropTypes.string,
  part: React.PropTypes.object
};

PartOnBike.defaultProps = {
  config: {},
  id: '',
  imageFile: '',
  part: {},
};

module.exports = PartOnBike;
