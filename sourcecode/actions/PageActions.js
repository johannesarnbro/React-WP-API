import mcFly from '../flux/mcFly';
import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const PageActions = mcFly.createActions({

  fetchIndex() {
    return WP.get('/pages/')
      .then(function (data) {
        return {
          actionType: actionTypes.PAGE_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PAGE_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchBySlug(slug) {
    return WP.get('/pages/' + slug)
      .then(function (data) {
        return {
          actionType: actionTypes.PAGE_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PAGE_FETCH_FAIL,
          data: Immutable.fromJS({
            slug: slug,
            error: data,
          }),
        };
      });
  },

});

export default PageActions;
