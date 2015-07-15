import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const ProjectActions = mcFly.createActions({
  fetchAll() {
    return WP.get('/posts?type=webgl')
      .then(function (data) {
        return {
          actionType: actionTypes.PROJECT_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PROJECT_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },
  // http://178.62.101.215/wp-json/posts?type=webgl&filter[name]=alexander-star
  fetchBySlug(slug) {
    return WP.get('/posts?type=webgl&filter[name]=' + slug)
      .then(function (data) {
        return {
          actionType: actionTypes.PROJECT_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.PROJECT_FETCH_FAIL,
          data: data,
        };
      });
  },
});

export default ProjectActions;
