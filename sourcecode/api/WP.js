import 'whatwg-fetch';
import Immutable from 'immutable';
import {wordpress} from '../config.js';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

function saveToLocalStorage(timestamp, endpoint, data) {
  localStorage.setItem(endpoint, JSON.stringify({
    timestamp: timestamp,
    data: data,
  }));
}

function dirty(cache) {
  const today = new Date();
  const cacheDate = new Date(cache.timestamp);
  return today - cacheDate >= wordpress.cacheTime;
}

const WP = {
  get: function (endpoint) {

    const cache = localStorage.getItem(endpoint);
    const js = JSON.parse(cache);

    if (cache && !dirty(js)) {

      return new Promise((resolve) => {
        const data = Immutable.fromJS(js.data);
        resolve(data);
      });

    } else {

      const url = wordpress.hostname + wordpress.wpJSONEndpoint + endpoint;
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .then((payload) => {
            const data = Immutable.fromJS(payload);
            saveToLocalStorage(new Date(), endpoint, payload);
            resolve(data);
          }).catch((error) => {
            reject(error);
          });
      });

    }
  },
};


export default WP;
