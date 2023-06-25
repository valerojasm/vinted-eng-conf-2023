import React, { useEffect, useState } from 'react'
import { API_BASE_URL, BASE_SEARCH_PARAMS, FAVORITES_KEY } from '~/constants'
import LoaderIcon from '~/components/Icons/LoaderIcon'
import PhotoCard from '~/components/PhotoCard/PhotoCard'
import VisuallyHidden from '~/components/VisuallyHidden/VisuallyHidden'
import useFetchData from '~/hooks/useFetchData'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import handleSortPhotos from '~/utils/handleSortPhotos'
import Styled from './PhotoGrid.styled'
import debounce from '~/utils/debounce'
import usePersistentValue from '~/hooks/usePersistentValue'

const Photos = () => {
  const search = new URLSearchParams(BASE_SEARCH_PARAMS)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useInfiniteScroll(() =>
    setPage((prevPage) => prevPage + 1),
  )
  const fetchPhotos = useFetchData()
  const [favorites, setFavorites] = usePersistentValue([], FAVORITES_KEY)
  const [photos, setPhotos] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    search.set('page', page)
    debounce(
      fetchPhotos({
        baseUrl: API_BASE_URL,
        search,
        onError: (error) => setErrorMessage(error.message),
        onSuccess: (data) => {
          setErrorMessage('')
          setPhotos([...photos, ...handleSortPhotos(data, photos)])
          setIsLoading(false)
        },
      }),
    )
  }, [page])

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  return (
    <>
      <VisuallyHidden>Vinted Challenge</VisuallyHidden>
      <Styled.Error>
        <Styled.Error.Message>{errorMessage}</Styled.Error.Message>
      </Styled.Error>
      {Boolean(photos.length) && (
        <Styled.PhotoGrid>
          {photos.map((photo, idx) => (
            <PhotoCard
              key={`photo-${photo.id}-${idx}`}
              favorites={favorites}
              setFavorites={setFavorites}
              {...photo}
            />
          ))}
        </Styled.PhotoGrid>
      )}
      {isLoading && <LoaderIcon />}
    </>
  )
}

export default Photos
