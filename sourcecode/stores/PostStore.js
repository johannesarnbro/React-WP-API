import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let posts = Immutable.fromJS([]);

function reset(data) {
  posts = data;
}

const PostStore = mcFly.createStore({
  getAll: function () {
    return posts;
  },
}, function (payload) {

  const _posts = posts;

  switch (payload.actionType) {

    case actionTypes.POST_INDEX_FETCH_SUCCESS:
      reset(payload.data);
      break;

    case actionTypes.POST_INDEX_FETCH_FAIL:
      break;

    default:
      return true;
  }

  if (_posts !== posts) {
    PostStore.emitChange();
  }

  return true;
});

export default PostStore;
