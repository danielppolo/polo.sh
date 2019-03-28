import axios from 'axios';

export const giphy = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });