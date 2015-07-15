import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let state = Immutable.fromJS({});

function reset(data) {
  state = data;
}

function setThemeColor(color) {
  state = state.set('themeColor', color);
}

const SiteStore = mcFly.createStore({
  getAll: function () {
    return state;
  },
}, function (payload) {

  const _state = state;

  switch (payload.actionType) {

    case actionTypes.SITE_FETCH_SUCCESS:
      reset(payload.data);
      break;

    case actionTypes.SITE_THEMECOLOR_SET:
      setThemeColor(payload.data);
      break;


    case actionTypes.SITE_FETCH_FAIL:
      break;

    default:
      return true;
  }

  if (_state !== state) {
    SiteStore.emitChange();
  }

  return true;
});

export default SiteStore;
