import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const BlogActions = mcFly.createActions({
  fetchIndex() {
    return WP.get('/posts/')
      .then(function (data) {
        return {
          actionType: actionTypes.BLOG_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.BLOG_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchByCategory(categoryName) {
    return WP.get('/posts/?filter[category_name]=' + categoryName)
      .then(function (data) {
        return {
          actionType: actionTypes.BLOG_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.BLOG_FETCH_FAIL,
          data: data,
        };
      });
  },

  fetchBySlug(slug) {
    return WP.get('/posts?filter[category_name]=blogg&filter[name]=' + slug)
      .then(function (data) {
        return {
          actionType: actionTypes.BLOG_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.BLOG_FETCH_FAIL,
          data: data,
        };
      });
  },
});

export default BlogActions;
