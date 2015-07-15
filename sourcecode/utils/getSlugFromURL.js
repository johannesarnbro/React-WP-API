import {wordpress} from '../config.js';

function getSlugFromURL(url) {
  return url
    .replace(wordpress.hostname, '')
    .replace(/\/$/, '');
}

export default getSlugFromURL;
