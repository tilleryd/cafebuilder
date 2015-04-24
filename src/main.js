/* main.js */

// vendors
global.$ = global.jQuery = require('jquery');
require('jquery-ui');
require('spectrum')($);
import React from 'react';

// app
import Bike from 'Bike';
import Parts from 'Parts';
import PartsConfig from 'partsConfig';

$(document).ready(function() {

  let activeColor = '#666666';

  $('.draggable').draggable({opacity: 0.8});

  $('#spectrum-colorpicker-flat').spectrum({
    color: activeColor,
    flat: true,
    preferredFormat: 'rgb',
    showButtons: false,
    move: function(color) {
      activeColor = color.toHexString();
      $('canvas').trigger('changeColor', color.toHexString());
    }
  });

  new Bike(activeColor);

  for(let part of PartsConfig) {
    React.render(<Parts partId={part.id} parts={part.parts} />, document.getElementById(`${part.id}s`));
  }

});
