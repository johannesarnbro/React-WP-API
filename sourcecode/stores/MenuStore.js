import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let menus = Immutable.fromJS({});

function addMenu(menu) {
  const ID = menu.get('ID');
  menus = menus.set(ID, menu);
}

const MenuStore = mcFly.createStore({
  getMenuByID: function (id) {
    return menus.get(id);
  },
}, function (payload) {

  const _menus = menus;

  switch (payload.actionType) {

    case actionTypes.MENU_FETCH_SUCCESS:
    case actionTypes.MENU_FETCH_FAIL:
      addMenu(payload.data);
      break;

    default:
      return true;
  }

  if (_menus !== menus) {
    MenuStore.emitChange();
  }

  return true;
});

export default MenuStore;
