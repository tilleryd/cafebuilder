// PartOnBike.react.js

import BikeStore from 'stores/BikeStore';
import jqueryUI from 'jquery-ui';
import partsConfig from 'partsConfig';
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
  }

  componentDidMount() {
    this.canvas = React.findDOMNode(this);
    this.canvasContext = this.canvas.getContext('2d');
    this._loadImage();
    if (this.props.config.draggable) {
      $(this.canvas).draggable({opacity: 0.8});
    }

    BikeStore.addChangeListener(this._onChangePart.bind(this));
  }

  componentWillUnmount() {
    BikeStore.removeChangeListener(this._onChangePart.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.part.name !== this.state.part.name) {
      this.props.config = partsConfig[this.props.id].parts[this.state.part.name];
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.props.config.w;
      this.canvas.height = this.props.config.h;
      this.canvasContext.drawImage(this.image, this.props.config.x, this.props.config.y);
      this._setImageData();
    }

    /*
    if(this.props.config['paintable']) {
      // first reset to original image
      this.canvasContext.putImageData(this.imageData, 0, 0);

      // then colorize
      this.canvasContext.globalCompositeOperation = 'source-atop';
      this.canvasContext.globalAlpha = 0.8;
      this.canvasContext.fillStyle = this.state.part.color;
      this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    */
  }

  _onChangePart(id) {
    if (id !== this.props.id) { return }
    this.setState(getPartState(id));
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
    let classes = this.state.part.name;
    if (this.props.config.draggable) {
      classes += ' draggable';
    }
    return classes;
  }

  render() {
    return (
      <canvas
        id={this.props.id}
        width={this.props.config.w}
        height={this.props.config.h}
        className={this._getCSSClasses()}>
      </canvas>
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
