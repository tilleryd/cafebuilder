// BikeStore.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import assign from 'object-assign';
import BikeConfig from '../bikeConfig';
import PartConstants from '../constants/PartConstants';

let EventEmitter = require('events').EventEmitter;

let COLOR_CHANGE_EVENT = 'colorChange';
let PART_CHANGE_EVENT = 'partChange';
let PRESET_CHANGE_EVENT = 'presetChange';

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

/**
 * Update all bike part items.
 * @param {object} updates - An object literal containing only the data to be
 *     updated.
 */
function updateAll(updates) {
  Object.keys(_parts).map(key => {
    _parts[key] = assign({}, _parts[key], updates);
  });
}

let BikeStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of parts.
   * @return {object}
   */
  getAllParts() {
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
   * Emit part change event.
   * @param {string} id - A part id.
   */
  emitPartChange(id) {
    this.emit(PART_CHANGE_EVENT, id);
  },

  /**
   * Emit color change event.
   * @param {string} color - A color string.
   */
  emitColorChange() {
    this.emit(COLOR_CHANGE_EVENT);
  },

  /**
   * Emit color change event.
   * @param {string} name - A preset name.
   */
  emitPresetChange() {
    this.emit(PRESET_CHANGE_EVENT);
  },

  /**
   * @param {string} eventName
   * @param {function} callback
   */
  addChangeListener(eventName, callback) {
    switch(eventName) {
      case PartConstants.PART_CHANGE:
        this.on(PART_CHANGE_EVENT, callback);
        break;

      case PartConstants.COLOR_CHANGE:
        this.on(COLOR_CHANGE_EVENT, callback);
        break;      

      case PartConstants.PRESET_CHANGE:
        this.on(PRESET_CHANGE_EVENT, callback);
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
      case PartConstants.PART_CHANGE:
        this.removeListener(PART_CHANGE_EVENT, callback);
        break;

      case PartConstants.COLOR_CHANGE:
        this.removeListener(COLOR_CHANGE_EVENT, callback);
        break;

      case PartConstants.PRESET_CHANGE:
        this.removeListener(PRESET_CHANGE_EVENT, callback);
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
    case PartConstants.PART_CHANGE:
      update(action.id, {name: action.name});
      BikeStore.emitPartChange(action.id);
      break;

    case PartConstants.COLOR_CHANGE:
      updateAll({color: action.color});
      BikeStore.emitColorChange();
      break;

    case PartConstants.PRESET_CHANGE:
      updateAll({name: action.name});
      BikeStore.emitPresetChange();
      break;

    default:
      // no op
  }
});

module.exports = BikeStore;
