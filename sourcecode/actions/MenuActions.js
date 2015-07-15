import mcFly from '../flux/mcFly';
import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const MenuActions = mcFly.createActions({

  fetchIndex() {
    return WP.get('/menu/')
      .then(function (data) {
        return {
          actionType: actionTypes.MENU_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.MENU_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchByID(id) {


    return WP.get('/menus/' + id)
      .then(function (data) {
        return {
          actionType: actionTypes.MENU_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.MENU_FETCH_FAIL,
          data: Immutable.fromJS({
            id: id,
            error: data,
          }),
        };
      });
  },

});

export default MenuActions;
