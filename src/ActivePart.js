// ActivePart.js

import React from 'react';

class ActivePart extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      id: props.config.id,
      imageFile: props.config.file,
      config: props.config['parts'] ? props.config.parts[0] : props.config, 
      activeColor: props.activeColor,
      draggable: props.draggable
    }

    this.canvas = null;
    this.canvasContext = null;
    this.image = null;
    this.imageData = null;
  }

  componentDidMount() {
    this.canvas = React.findDOMNode(this);
    this.canvasContext = this.canvas.getContext('2d');
    this._registerEvents();
    this._loadImage();
    if(this.state.draggable) {
      $(this.canvas).draggable({opacity: 0.8});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.config !== this.state.config) {
      this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = this.state.config.w;
      this.canvas.height = this.state.config.h;
      this.canvasContext.drawImage(this.image, this.state.config.x, this.state.config.y);
      this._setImageData();

      let cssClasses = $(this.canvas).attr('class').split(' ');
      cssClasses[0] = this.state.config.name;
      $(this.canvas)
        .removeClass()
        .addClass(cssClasses.join(' '));
    }

    if(this.state.config['paintable']) {
      // first reset to original image
      this.canvasContext.putImageData(this.imageData, 0, 0);

      // then colorize
      this.canvasContext.globalCompositeOperation = 'source-atop';
      this.canvasContext.globalAlpha = 0.8;
      this.canvasContext.fillStyle = this.state.activeColor;
      this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  _registerEvents() {
    $(this.canvas)
      .on('changeImage', (e, partName) => {
        this.setState({config: this._getPartConfig(partName)});
      })
      .on('changeColor', (e, color) => {
        this.setState({activeColor: color});
      });
  }

  _loadImage() {
    this.image = new Image();
    this.image.src = `/images/${this.state.imageFile}`;
    this.image.onload = () => {
      this.canvasContext.drawImage(this.image, 0, 0);
      this._setImageData();
    }
  }

  _setImageData() {
    this.imageData = this.canvasContext.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  _getPartConfig(partName) {
    for(let part of this.props.config.parts) {
      if (partName === part.name) { 
        return part; 
      }
    }
  }

  _onMouseOver(e) {
    //TODO: show the parts list
  }

  render() {
    let classes = 'original';
    if (this.state.draggable) {
      classes += ' draggable';
    }

    return (
      <canvas
        id={this.state.id}
        width={this.state.config.w}
        height={this.state.config.h}
        className={classes}
        onMouseOver={this._onMouseOver.bind(this)}>
      </canvas>
    );
  }

}

ActivePart.propTypes = {
  id: React.PropTypes.string,
  imageFile: React.PropTypes.string,
  config: React.PropTypes.object, 
  activeColor: React.PropTypes.string,
  draggable: React.PropTypes.bool
};

ActivePart.defaultProps = {
  id: '',
  imageFile: '',
  config: {}, 
  activeColor: '',
  draggable: false
};

module.exports = ActivePart;
