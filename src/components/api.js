import axios from 'axios';

export const fetchImages = async (input, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29873603-6f5db99bfc8ea8ccecb2d05a3';
  const response = await axios.get(BASE_URL, {
    params: {
      q: input,
      page: page,
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  let responseData = response.data;

  response.data.hits = responseData.hits.map(image => ({
    id: image.id,
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
    tags: image.tags,
  }));

  return responseData;
};
