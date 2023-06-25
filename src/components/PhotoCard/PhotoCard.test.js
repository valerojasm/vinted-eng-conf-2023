import React from 'react'
import { render } from '@testing-library/react'
import PhotoCard from './PhotoCard'

const defaultProps = {
  id: '1',
  description: { _content: '' },
  favorites: [],
  ownername: 'John',
  server: '',
  secret: '',
  setFavorites: jest.fn(),
  title: 'Nature picture',
}

describe('PhotoCard component', () => {
  test('Card shows title and ownername', () => {
    const { getByTestId } = render(<PhotoCard {...defaultProps} />)
    const photoCard = getByTestId('photo-card')
    expect(photoCard).toHaveTextContent(defaultProps.ownername)
    expect(photoCard).toHaveTextContent(defaultProps.title)
  })
  test('Card button shows label `Favorite` when id not in favorites', () => {
    const { getByTestId } = render(<PhotoCard {...defaultProps} />)
    const favoriteButton = getByTestId('favorite-button')
    expect(favoriteButton).toHaveTextContent('Favorite')
  })
  test('Card button shows label `Unfavorite` when photo id is in favorites', () => {
    const { getByTestId } = render(
      <PhotoCard {...defaultProps} favorites={['1']} />,
    )
    const favoriteButton = getByTestId('favorite-button')
    expect(favoriteButton).toHaveTextContent('Unfavorite')
  })
  test('Heart icon is not visible when photo id is not in favorites', () => {
    const { queryByTestId } = render(<PhotoCard {...defaultProps} />)
    expect(queryByTestId('heart-icon')).toBeNull()
  })
  test('Heart icon is visible when photo id is in favorites', () => {
    const { getByTestId } = render(
      <PhotoCard {...defaultProps} favorites={['1']} />,
    )
    const heartIcon = getByTestId('heart-icon')
    expect(heartIcon).toBeVisible()
  })
})
