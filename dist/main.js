(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

// app.js

var _ImageCanvas = require('./src/ImageCanvas');

var _ImageCanvas2 = _interopRequireWildcard(_ImageCanvas);

$(document).ready(function () {

  var activeColor = '#f90000';
  var canvasConfig = [{
    id: 'core',
    file: 'core.png'
  }, {
    id: 'tank',
    file: 'tanks.png',
    original: {
      x: 0,
      y: 0,
      h: 110,
      w: 246
    },
    supersport: {
      x: -246,
      y: 0,
      h: 95,
      w: 278
    }
  }, {
    id: 'seat',
    file: 'seats.png',
    original: {
      x: 0,
      y: 0,
      h: 95,
      w: 300
    },
    supersport: {
      x: -100,
      y: 0,
      h: 95,
      w: 278
    }
  }];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = canvasConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var config = _step.value;

      new _ImageCanvas2['default'](config);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  $('.draggable').draggable({
    opacity: 0.8
  });

  $('#spectrum-colorpicker-flat').spectrum({
    color: '#f90000',
    flat: true,
    preferredFormat: 'rgb',
    showButtons: false,
    move: function move(color) {
      activeColor = color.toHexString();
    }
  });

  $('select').on('change', function () {
    var name = $(this).attr('name');
    $('#' + name).trigger('changeImage', { val: $(this).val().toLowerCase(), color: activeColor });
  });
});

},{"./src/ImageCanvas":2}],2:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

// ImageCanvas.js

var ImageCanvas = (function () {
  function ImageCanvas(config) {
    _classCallCheck(this, ImageCanvas);

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

  _createClass(ImageCanvas, [{
    key: 'render',
    value: function render() {
      this.loadCanvas();
      this.loadImage();
    }
  }, {
    key: 'registerEvents',
    value: function registerEvents() {
      var _this = this;

      this.canvas.on('changeImage', function (e, data) {
        _this.onChangeImage(data);
      });
    }
  }, {
    key: 'loadCanvas',
    value: function loadCanvas() {
      this.canvas = $('#' + this.id);
      this.canvasContext = this.canvas.get(0).getContext('2d');
    }
  }, {
    key: 'loadImage',
    value: function loadImage() {
      var _this2 = this;

      this.image = new Image();
      this.image.src = '' + this.imageFolder + '/' + this.imageFile;
      this.image.onload = function () {
        _this2.onImageLoad();
      };
    }
  }, {
    key: 'onImageLoad',
    value: function onImageLoad() {
      this.canvasContext.drawImage(this.image, 0, 0);
    }
  }, {
    key: 'onChangeImage',
    value: function onChangeImage(data) {
      this.canvasContext.clearRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
      this.canvas.get(0).width = this.config[data.val].w;
      this.canvas.get(0).height = this.config[data.val].h;
      this.canvasContext.drawImage(this.image, this.config[data.val].x, this.config[data.val].y);
      this.changeColor(data.color);

      var cssClasses = this.canvas.attr('class').split(' ');
      cssClasses[0] = data.val;
      this.canvas.removeClass().addClass(cssClasses.join(' '));
    }
  }, {
    key: 'changeColor',
    value: function changeColor(color) {
      this.canvasContext.globalCompositeOperation = 'source-atop';
      this.canvasContext.globalAlpha = 0.6;
      this.canvasContext.fillStyle = color;
      this.canvasContext.fillRect(0, 0, this.canvas.get(0).width, this.canvas.get(0).height);
    }
  }]);

  return ImageCanvas;
})();

module.exports = ImageCanvas;

},{}]},{},[1]);
