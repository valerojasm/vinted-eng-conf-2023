export const API_BASE_URL = 'https://api.flickr.com/services/rest/'

export const BASE_SEARCH_PARAMS = {
  api_key: process.env.API_KEY,
  extras: 'description, owner_name',
  format: 'json',
  nojsoncallback: 1,
  method: 'flickr.photos.search',
  per_page: 20,
  tags: 'portra400, cinestill800t',
  sort: 'relevance',
}

export const PHOTO_IMAGE_URL = 'https://live.staticflickr.com/'

export const FAVORITES_KEY = 'favorites'
