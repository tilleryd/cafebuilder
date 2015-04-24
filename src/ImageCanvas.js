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
    if(this.activeConfig.paintable) {
      this.changeColor(this.activeColor);
    }
  }

  onChangeImage(data) {
    this.activeConfig = this.config.types[data.val];
    this.canvasContext.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
    this.canvas.get(0).width = this.config.types[data.val].w;
    this.canvas.get(0).height = this.config.types[data.val].h;
    this.canvasContext.drawImage(this.image, this.config.types[data.val].x, this.config.types[data.val].y);
    this.setImageData()    
    this.changeColor(data.color);

    let cssClasses = this.canvas.attr('class').split(' ');
    cssClasses[0] = data.val;
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
  }

  setImageData() {
    this.imageData = this.canvasContext.getImageData(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
  }

  getDefaultConfig(config) {
    return config['parts'] ? config.parts[0] : null;
  }

}

module.exports = ImageCanvas;
