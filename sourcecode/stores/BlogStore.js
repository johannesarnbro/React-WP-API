import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let blogPosts = Immutable.fromJS([]);

function reset(data) {
  blogPosts = data;
}

const BlogStore = mcFly.createStore({
  getAll: function () {
    return blogPosts;
  },
}, function (payload) {

  const _blogPosts = blogPosts;

  switch (payload.actionType) {

    case actionTypes.BLOG_FETCH_SUCCESS:
      reset(payload.data);
      break;

    case actionTypes.BLOG_FETCH_FAIL:
      break;

    default:
      return true;
  }

  if (_blogPosts !== blogPosts) {
    BlogStore.emitChange();
  }

  return true;
});

export default BlogStore;
