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

  React.render(
    <Bike parts={PartsConfig} activeColor={activeColor} />, 
    document.getElementById('bike-wrapper')
  );

  for(let part of PartsConfig) {
    React.render(
      <Parts partId={part.id} parts={part.parts} />, 
      document.getElementById(`${part.id}s`)
    );
  }

});
