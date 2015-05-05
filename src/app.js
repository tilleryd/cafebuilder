// app.js

global.$ = global.jQuery = require('jquery');

import CafeBuilderApp from 'components/CafeBuilderApp.react';
import React from 'react';

React.render(
  <CafeBuilderApp />,
  document.getElementById('cafebuilderapp')
);