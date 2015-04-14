// main.js

import ImageCanvas from './src/ImageCanvas';

$(document).ready(function() {

  let $title = $('h1.title');
  let activeColor = '#f90000';
  let canvasConfig = [
    {
      id: 'core',
      file: 'core.png'
    },
    {
      id: 'tank',
      file: 'tanks.png',
      color: activeColor,
      original: {
        x: 0,
        y: 0,
        h: 110,
        w: 246,
        paintable: true
      },
      supersport: {
        x: -246,
        y: 0,
        h: 95,
        w: 278,
        paintable: true
      }
    },
    {
      id: 'seat',
      file: 'seats.png',
      original: {
        x: 0,
        y: 0,
        h: 95,
        w: 300
      },
      supersport: {
        x: -305,
        y: 0,
        h: 95,
        w: 240,
        paintable: true
      }
    }
  ]

  for(let config of canvasConfig) { new ImageCanvas(config); }

  $('.draggable').draggable({
    opacity: 0.8
  });

  $('#spectrum-colorpicker-flat').spectrum({
    color: '#f90000',
    flat: true,
    preferredFormat: 'rgb',
    showButtons: false,
    move: function(color) {
      activeColor = color.toHexString();
      $('canvas').trigger('changeColor', activeColor);
    }
  });

  $('select').on('change', function() {
    var name = $(this).attr('name');
    $(`#${name}`).trigger('changeImage', {val: $(this).val().toLowerCase(), color: activeColor});
  });

  $title.lettering();

  var pulseTitle = function(idx = 0) {
    var timeout = setTimeout(function() {
      $title.children().eq(idx).addClass('pulse');

      if(idx === $title.children().length) {
        clearTimeout(timeout);
        return;
      } else {
        pulseTitle(++idx);
      }
    }, 50);
  };

  pulseTitle();

});
