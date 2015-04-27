// ImageCanvas.js

import React from 'react';

class ActivePart extends React.Component {

  constructor(props) {
    super(props);
    this.activeColor = props.activeColor;
    this.activeConfig = this.getDefaultConfig(props.config);
    this.canvas = null;
    this.canvasContext = null;
    this.id = props.config.id;
    this.image = null;
    this.imageData = null;
    this.imageFile = props.config.file;
    this.imageFolder = '/images';
  }

  onMouseOver(e) {
    //TODO
  }

  componentDidMount() {
    this.canvas = React.findDOMNode(this);
    this.canvasContext = this.canvas.getContext('2d');
    this.loadImage();
    this.registerEvents();
    if(this.props.draggable) {
      $(this.canvas).draggable({opacity: 0.8});
    }
  }

  render() {
    var classes = 'original';
    if (this.props.draggable) {
      classes += ' draggable';
    }

    return (
      <canvas
        id={this.props.config.id}
        width={this.activeConfig.w}
        height={this.activeConfig.h}
        className={classes}
        onMouseOver={this.onMouseOver.bind(this)}>
      </canvas>
    );
  }

  registerEvents() {
    $(this.canvas)
      .on('changeImage', (e, data) => {
        this.onChangeImage(data);
      })
      .on('changeColor', (e, data) => {
        this.changeColor(data);
      });
  }


  loadImage() {
    this.image = new Image();
    this.image.src = `${this.imageFolder}/${this.imageFile}`;
    this.image.onload = () => {
      this.onImageLoad();
    }
  }

  onImageLoad() {
    this.canvasContext.drawImage(this.image, 0, 0);
    this.setImageData();
    if(this.activeConfig && this.activeConfig['paintable']) {
      this.changeColor(this.activeColor);
    }
  }

  onChangeImage(partName) {
    this.activeConfig = this.findPartConfig(partName);
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = this.activeConfig.w;
    this.canvas.height = this.activeConfig.h;
    this.canvasContext.drawImage(this.image, this.activeConfig.x, this.activeConfig.y);
    this.setImageData();   
    this.changeColor(this.activeColor);

    let cssClasses = $(this.canvas).attr('class').split(' ');
    cssClasses[0] = partName;
    $(this.canvas)
      .removeClass()
      .addClass(cssClasses.join(' '));
  }

  changeColor(color) {
    if(!this.activeConfig || !this.activeConfig.paintable) { return; }
    // first reset to original image
    this.canvasContext.putImageData(this.imageData, 0, 0);

    // then colorize
    this.canvasContext.globalCompositeOperation = 'source-atop';
    this.canvasContext.globalAlpha = 0.6;
    this.canvasContext.fillStyle = color;
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.activeColor = color;
  }

  setImageData() {
    this.imageData = this.canvasContext.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  getDefaultConfig(config) {
    return config['parts'] ? config.parts[0] : this.props.config;
  }

  findPartConfig(partName) {
    for(let part of this.props.config.parts) {
      if (partName === part.name) { return part; }
    }
  }

}

module.exports = ActivePart;
