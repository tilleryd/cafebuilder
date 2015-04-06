// app.js

import ImageCanvas from './src/ImageCanvas';

$(document).ready(function() {

  let activeColor = '#f90000';
  let canvasConfig = [
    {
      id: 'core',
      file: 'core.png'
    },
    {
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
        x: -100,
        y: 0,
        h: 95,
        w: 278
      }
    }
  ]

  for(let config of canvasConfig) {
    new ImageCanvas(config);
  }

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
    }
  });

  $('select').on('change', function() {
    var name = $(this).attr('name');
    $(`#${name}`).trigger('changeImage', {val: $(this).val().toLowerCase(), color: activeColor});
  });

});
