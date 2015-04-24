// Bike.js

import ImageCanvas from 'ImageCanvas';
import PartsConfig from 'partsConfig';

class Bike {

  constructor(activeColor) {
    this.activeColor = activeColor;
    this.render();
  }

  render() {
  	new ImageCanvas({id: 'core', file: 'core.png'});
  	for(let part of PartsConfig) { new ImageCanvas(part, this.activeColor); }
  }
}

module.exports = Bike;