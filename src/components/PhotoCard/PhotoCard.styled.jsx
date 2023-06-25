import styled from 'styled-components'

const Card = styled.li`
  display: flex;
  border-radius: 5px;
  margin: 1em;
  position: relative;
  box-shadow: var(--box-shadow-primary);
  overflow: hidden;
  height: calc(100vh / 3);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s ease;
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`

const PhotoData = styled.section`
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`

const Title = styled.h3`
  font-weight: 900;
  color: var(--typography-primary);
`

const Owner = styled.p`
  font-style: italic;
  color: var(--typography-primary);
`

const Divider = styled.hr`
  background-color: var(--typography-primary);
  height: 2px;
  width: 25%;
  border: 0;
`

const Button = styled.button`
  background-color: transparent;
  color: var(--typography-primary);
  border: 1px solid var(--typography-primary);
  font-weight: bold;
  :hover {
    background-color: var(--typography-primary);
    color: var(--typography-dark-grey);
    border: 1px solid var(--typography-dark-grey);
  }
`

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  margin: 1em;
`

Card.Title = Title
Card.Overlay = Overlay
Card.Owner = Owner
Card.PhotoData = PhotoData
Card.Divider = Divider
Card.Button = Button
Card.IconContainer = IconContainer

export default Card
