// Bike.js

import ImageCanvas from 'ImageCanvas';
import Config from 'config';

class Bike {

  constructor(activeColor) {
    this.activeColor = activeColor;
    this.render();
  }

  render() {
  	new ImageCanvas({id: 'core', file: 'core.png'});
  	for(let config of Config) { new ImageCanvas(config, this.activeColor); }
  }
}

module.exports = Bike;