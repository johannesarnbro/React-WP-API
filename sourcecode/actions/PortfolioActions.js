import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const PortfolioActions = mcFly.createActions({
  fetchIndex() {
    return WP.get('/posts/')
      .then(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchAll() {
    return WP.get('/posts?type=portfoliocase')
      .then(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchBySlug(slug) {
    return WP.get('/posts?type=portfoliocase&filter[name]=' + slug)
      .then(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PORTFOLIO_FETCH_FAIL,
          data: data,
        };
      });
  },
});

export default PortfolioActions;
