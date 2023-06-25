import React from 'react'
import PropTypes from 'prop-types'
import { PHOTO_IMAGE_URL } from '~/constants'
import Card from './PhotoCard.styled'
import HeartIcon from '~/components/Icons/HeartIcon'

const PhotoCard = ({
  id,
  description,
  favorites,
  ownername,
  server,
  secret,
  setFavorites,
  title,
}) => {
  const url = `${PHOTO_IMAGE_URL}${server}/${id}_${secret}.jpg`
  const isFavorite = favorites.includes(id)

  return (
    <Card data-testid='photo-card'>
      <img
        alt={`${title} - ${description?._content || ownername}`}
        src={url}
        loading='lazy'
      />
      <Card.Overlay>
        {isFavorite && (
          <Card.IconContainer data-testid='heart-icon'>
            <HeartIcon />
          </Card.IconContainer>
        )}
        <Card.PhotoData>
          <Card.Title>{title}</Card.Title>
          <Card.Divider />
          <Card.Owner>{ownername}</Card.Owner>
          <Card.Button
            data-testid='favorite-button'
            $isFavorite={isFavorite}
            onClick={() =>
              setFavorites((prev) =>
                isFavorite
                  ? prev.filter((favId) => favId !== id)
                  : [...prev, id],
              )
            }
          >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </Card.Button>
        </Card.PhotoData>
      </Card.Overlay>
    </Card>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.shape({ _content: PropTypes.string }),
  favorites: PropTypes.arrayOf(PropTypes.string),
  ownername: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  secret: PropTypes.string.isRequired,
  setFavorites: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default PhotoCard
