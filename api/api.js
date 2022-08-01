import axios from 'axios';
const apiKey = 'mc6VBTYp8dUSM4jH4R1jhEUN7v0RVG4FDy8cudwq';

export const getDetails = id => {
  return axios.get(
    `http://www.neowsapp.com/rest/v1/neo/${id}?api_key=${apiKey}`,
  );
};

export const getList = () => {
  return axios.get(
    `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`,
  )
};
