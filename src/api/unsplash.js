import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID UmnPdGQ5ub3i6zdcMHhRAR6Bz6izj_1pBZgtVxusCVI',
  },
});
