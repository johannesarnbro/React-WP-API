import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let pages = Immutable.fromJS({});

function addPage(page) {
  const slug = page.get('slug');
  pages = pages.set(slug, page);
}


const PageStore = mcFly.createStore({
  getPageBySlug: function (slug) {
    return pages.get(slug);
  },
}, function (payload) {

  const _pages = pages;

  switch (payload.actionType) {

    case actionTypes.PAGE_FETCH_SUCCESS:
    case actionTypes.PAGE_FETCH_FAIL:
      addPage(payload.data);
      break;

    default:
      return true;
  }

  if (_pages !== pages) {
    PageStore.emitChange();
  }

  return true;
});

export default PageStore;
