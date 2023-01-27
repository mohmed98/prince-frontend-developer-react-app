import axios from 'axios';

const requestDefaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    'API-KEY': 'ot3kp0rlu'
  }
}

export const getData = async (url) => {
  const {data} = await  axios.get(url,requestDefaultOptions);
  return data;
};
