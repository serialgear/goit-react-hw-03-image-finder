import axios from 'axios';

export const fetchImages = async (input, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '31433031-3d0f0dfea87925373aae81ab3';
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
