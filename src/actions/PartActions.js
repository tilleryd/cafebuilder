// PartActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import PartConstants from '../constants/PartConstants';

let PartActions = {

  /**
   * @param {string} id - ID of part i.e. seat, tank
   * @param {string} name - Name of part i.e. original, supersport.
   */
  changePart(id, name) {
    AppDispatcher.dispatch({
      actionType: PartConstants.PART_CHANGE,
      id: id,
      name: name
    });
  },

  /**
   * @param {string} color - Hex code.
   */
  changeColor(color) {
    AppDispatcher.dispatch({
      actionType: PartConstants.COLOR_CHANGE,
      color: color
    });
  },

  /**
   * @param {string} name - Name of the bike style i.e. original, supersport.
   */
  changePreset(name) {
    AppDispatcher.dispatch({
      actionType: PartConstants.PRESET_CHANGE,
      name: name
    });
  }

}

module.exports = PartActions;
