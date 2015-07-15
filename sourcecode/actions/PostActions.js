import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import WP from '../api/WP.js';

const PostActions = mcFly.createActions({
  fetchIndex() {
    return WP.get('/posts/')
      .then(function (data) {
        return {
          actionType: actionTypes.POST_INDEX_FETCH_SUCCESS,
          data: data,
        };
      })
      .catch(function (data) {
        return {
          actionType: actionTypes.POST_INDEX_FETCH_FAIL,
          data: data,
        };
      });
  },
});

export default PostActions;
