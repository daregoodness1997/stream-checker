import axios from 'axios';
const apiKey = import.meta.env.VITE_APIKEY;


export default {
  handleSearch: async (title, page) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://ott-details.p.rapidapi.com/search',
        headers: {
          'X-RapidAPI-Host': 'ott-details.p.rapidapi.com',
          'X-RapidAPI-Key': apiKey,
        },
        params: { title: title, page: page },
      };

      const result = await axios.request(options);

      return result;
    } catch (error) {
      console.log(error);
    }
  },
};
