// PartsEmitter.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'object-assign';
import PartConstants from '../constants/PartConstants';

let EventEmitter = require('events').EventEmitter;

let SHOW_EVENT = 'show';
let HIDE_EVENT = 'hide';

let PartsEmitter = assign({}, EventEmitter.prototype, {

  /**
   * Emit show event.
   * @param {string} id - A part id.
   */
  emitShow(id) {
    this.emit(SHOW_EVENT, id);
  },

  /**
   * Emit hide event.
   * @param {string} id - A part id.
   */
  emitHide(id) {
    this.emit(HIDE_EVENT, id);
  },

  /**
   * @param {string} eventName
   * @param {function} callback
   */
  addChangeListener(eventName, callback) {
    switch(eventName) {
      case PartConstants.PARTS_SHOW:
        this.on(SHOW_EVENT, callback);
        break;

      case PartConstants.PARTS_HIDE:
        this.on(HIDE_EVENT, callback);
        break;

      default:
        // no op
    }
    return this;
  },

  /**
   * @param {string} eventName
   * @param {function} callback
   */
  removeChangeListener(eventName, callback) {
    switch(eventName) {
      case PartConstants.PARTS_SHOW:
        this.removeListener(eventName, callback);
        break;

      case PartConstants.PARTS_HIDE:
        this.removeListener(eventName, callback);
        break;

      default:
        // no op
    }
    return this;
  }
});

// Register callback to handle all updates
AppDispatcher.register(action => {
  switch(action.actionType) {
    case PartConstants.PARTS_SHOW:
      PartsEmitter.emitShow(action.id);
      break;

    case PartConstants.PARTS_HIDE:
      PartsEmitter.emitHide(action.id);
      break;

    default:
      // no op
  }
});

module.exports = PartsEmitter;
