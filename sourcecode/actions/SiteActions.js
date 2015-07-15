import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const SiteActions = mcFly.createActions({


  fetchAll() {
    return WP.get('/')
      .then(function (data) {
        return {
          actionType: actionTypes.SITE_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.SITE_FETCH_FAIL,
          data: data,
        };
      });
  },


  setThemeColor(option) {
    return {
      actionType: actionTypes.SITE_THEMECOLOR_SET,
      data: option,
    };
  },

});

export default SiteActions;
