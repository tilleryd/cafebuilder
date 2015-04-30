// PartActions.js

import AppDispatcher from '../dispatcher/AppDispatcher';
import PartConstants from '../constants/PartConstants';

let PartActions = {

  /**
   * @param  {string} id
   * @param  {string} name
   */
  changePart(id, name) {
    AppDispatcher.dispatch({
      actionType: PartConstants.PART_CHANGE,
      id: id,
      name: name
    });
  }

}

module.exports = PartActions;
