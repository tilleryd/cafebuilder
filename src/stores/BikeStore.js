// BikeStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'object-assign';
import BikeConfig from '../bikeConfig';
import PartConstants from '../constants/PartConstants';

let EventEmitter = require('events').EventEmitter;

let CHANGE_EVENT = 'changePart';

let _parts = BikeConfig;

/**
 * Update a bike part item.
 * @param  {string} id
 * @param {object} updates - An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _parts[id] = assign({}, _parts[id], updates);
}

let BikeStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of parts.
   * @return {object}
   */
  getAll() {
    return _parts;
  },

  /**
   * Get a single part.
   * @param {string} id - A part id.
   * @return {object}
   */
  getPart(id) {
    return _parts[id];
  },

  /**
   * Emit change event.
   * @param {string} id - A part id.
   */
  emitChange(id) {
    this.emit(CHANGE_EVENT, id);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(action => {
  switch(action.actionType) {
    case PartConstants.PART_CHANGE:
      update(action.id, {name: action.name});
      BikeStore.emitChange(action.id);
      break;

    default:
      // no op
  }
});

module.exports = BikeStore;
