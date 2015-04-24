/* main.js */

// vendors
global.$ = global.jQuery = require('jquery');
require('jquery-ui');
require('spectrum')($);
import React from 'react';

// app
import Bike from 'Bike';
import Parts from 'Parts';
import Config from 'config';

$(document).ready(function() {

  let $title = $('h1.title');
  let activeColor = '#f90000';

  $('.draggable').draggable({opacity: 0.8});

  $('#spectrum-colorpicker-flat').spectrum({
    color: '#f90000',
    flat: true,
    preferredFormat: 'rgb',
    showButtons: false,
    move: function(color) {
      activeColor = color.toHexString();
      $('canvas').trigger('changeColor', color.toHexString());
    }
  });

  $('select').on('change', function() {
    var name = $(this).attr('name');
    $(`#${name}`).trigger('changeImage', {val: $(this).val().toLowerCase(), color: activeColor});
  });

  new Bike(activeColor);

  for(let part of Config) {
    React.render(<Parts partName={part.id} parts={part.parts} />, document.getElementById(`${part.id}s`));
  }

});
