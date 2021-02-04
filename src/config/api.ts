/* eslint-disable camelcase */
import axios from 'axios';

const api_key = 'HoIHeelTcHrpZe94lpCnhablqrEEOe2XGq9IR0YW';

const date = new Date();
// eslint-disable-next-line prettier/prettier
const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

const api = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?',
  params: {
    earth_date: formattedDate,
    api_key,
  },
});

export default api;
