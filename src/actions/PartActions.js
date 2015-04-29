// PartActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import PartConstants from '../constants/PartConstants';

let PartActions = {

  /**
   * @param  {string} partName
   */
  changePart(partName) {
    AppDispatcher.dispatch({
      actionType: PartConstants.PART_CHANGE,
      partName: partName
    });
  }

 }

 module.exports = PartActions;