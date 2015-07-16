import mcFly from '../flux/mcFly';
import actionTypes from '../constants/actionTypes.js';
import Immutable from 'immutable';

let portfolioCases = Immutable.fromJS([]);

function reset(data) {
  portfolioCases = data;
}

const PortfolioStore = mcFly.createStore({
  getAll: function () {
    return portfolioCases;
  },
}, function (payload) {

  const _portfolioCases = portfolioCases;

  switch (payload.actionType) {

    case actionTypes.PORTFOLIO_FETCH_SUCCESS:
      reset(payload.data);
      break;

    case actionTypes.PORTFOLIO_FETCH_FAIL:
      break;

    default:
      return true;
  }

  if (_portfolioCases !== portfolioCases) {
    PortfolioStore.emitChange();
  }

  return true;
});

export default PortfolioStore;
