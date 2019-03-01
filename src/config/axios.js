import axios from 'axios';

export const giphy = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs/search?q=',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });