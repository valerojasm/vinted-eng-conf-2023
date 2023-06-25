const sortFavoritesFirst = (favorites) => (a, b) => {
  if (favorites.includes(a.id) && !favorites.includes(b.id)) {
    return -1
  }

  if (!favorites.includes(a.id) && favorites.includes(b.id)) {
    return 1
  }

  return 0
}

const handleSortPhotos = (data, photos) => {
  if (photos.length === 0) {
    return data.photos.photo.sort(sortFavoritesFirst)
  }

  return data.photos.photo
}

export default handleSortPhotos
