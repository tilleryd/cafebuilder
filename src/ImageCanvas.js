// ImageCanvas.js

class ImageCanvas {

  constructor(config, activeColor) {
    this.activeColor = activeColor;
    this.activeConfig = this.getDefaultConfig(config);
    this.canvas = null;
    this.canvasContext = null;
    this.config = config;
    this.id = config.id;
    this.image = null;
    this.imageData = null;
    this.imageFile = config.file;
    this.imageFolder = '/images';

    this.render();
    this.registerEvents();
  }

  render() {
    this.loadCanvas();
    this.loadImage();
  }

  registerEvents() {
    this.canvas
      .on('changeImage', (e, data) => {
        this.onChangeImage(data);
      })
      .on('changeColor', (e, data) => {
        this.changeColor(data);
      });
  }

  loadCanvas() {
    this.canvas = $(`#${this.id}`);
    this.canvasContext = this.canvas.get(0).getContext('2d');
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
    this.canvasContext.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
    this.canvas.get(0).width = this.activeConfig.w;
    this.canvas.get(0).height = this.activeConfig.h;
    this.canvasContext.drawImage(this.image, this.activeConfig.x, this.activeConfig.y);
    this.setImageData();   
    this.changeColor(this.activeColor);

    let cssClasses = this.canvas.attr('class').split(' ');
    cssClasses[0] = partName;
    this.canvas
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
    this.canvasContext.fillRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
    this.activeColor = color;
  }

  setImageData() {
    this.imageData = this.canvasContext.getImageData(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
  }

  getDefaultConfig(config) {
    return config['parts'] ? config.parts[0] : null;
  }

  findPartConfig(partName) {
    for(let part of this.config.parts) {
      if (partName === part.name) { return part; }
    }
  }

}

module.exports = ImageCanvas;
