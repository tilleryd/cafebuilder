// PartStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import PartConstants from '../constants/PartConstants';
import PartsConfig from '../partsConfig';

import assign from 'object-assign';

let EventEmitter = require('events').EventEmitter;

let CHANGE_EVENT = 'change';

let _parts = {};

/**
 * Update a Part item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, updates) {
  _parts[id] = assign({}, _parts[id], updates);
}

let PartStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of parts.
   * @return {object}
   */
  getAll() {
    return _parts;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
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
  var text;

  switch(action.actionType) {
    case PartConstants.PART_CHANGE:
      let partName = action.partName.trim();
      if (partName !== '') {
        //update(action.id, {partName: partName});
        PartStore.emitChange();
      }
      break;

    default:
      // no op
  }
});

module.exports = PartStore;
