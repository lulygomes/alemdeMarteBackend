/* eslint-disable camelcase */
import axios from 'axios';

const api_key = 'HoIHeelTcHrpZe94lpCnhablqrEEOe2XGq9IR0YW';

const api = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?',
  params: {
    api_key,
    sol: 10,
  },
});

export default api;
